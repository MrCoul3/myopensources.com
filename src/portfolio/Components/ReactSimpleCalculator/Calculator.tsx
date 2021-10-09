import React, {useEffect, useState, useRef, useContext, ProviderProps} from "react";
import './Calculator.scss';
import {ThemeContext, themes, TypesThemes} from "../ContextData/Themes";
import ThemeChangerButton from "./ThemeChangerButton";


export default function Calculator() {
    const value = useContext<TypesThemes>(ThemeContext);

    const {background: bg, color} = value.theme;
    const style = {background: bg, color: color};

    const keyBoardSymbols: string[] = ['c', '**', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'];
    const renderKeyboard = () => keyBoardSymbols.map((val: string) => <button style={style} value={val}>{val}</button>);

    const [value1, setValue1] = useState<string>('');
    const [valueSign, setValueSign] = useState<string>('');
    const [value2, setValue2] = useState<string>('');
    const [clear, setClear] = useState<boolean>(false);
    const input = useRef<HTMLInputElement>(null);

    const inputing = (event: React.MouseEvent<HTMLDivElement>): void => {

        const val: string = (event.target as HTMLButtonElement).value;
        if (val !== undefined) {
            if (!val.match(/[c<%*+/-]/) && valueSign === '') {
                setValue1((value1 + val));
            }
            if (val.match(/[%*+/-]/) && value1 !== '') {
                setValueSign(val);
            }
            if (!val.match(/[c<%*+/-]/) && valueSign !== '') {
                setValue2((value2 + val));
            }
            if (val.match(/[c]/)) setClear(true);
        }
    }

    useEffect(() => {
        if (input && input.current) {
            input.current.innerHTML = value1 + valueSign + value2;
        }
    }, [value1, valueSign, value2])

    const [result, setResult] = useState<number>(0);
    const calculating = () => {
        switch (valueSign) {
            case '+':
                setResult(+value1 + +value2);
                break;
            case '-':
                setResult(+value1 - +value2);
                break;
            case '*':
                setResult(+value1 * +value2);
                break;
            case '/':
                setResult(+value1 / +value2);
                break;
            case '**':
                setResult(Math.pow(+value1, +value2));
                break;
        }
    }
    useEffect(() => {
        // console.log(result)
        if (input && input.current) {
            input.current.innerHTML = result.toString();
        }
        if (clear === true) {
            setResult(0);
            setValue1('');
            setValueSign('');
            setValue2('');
            setClear(false)
        }
    }, [result, clear])


    return (
        <section id='Calculator'>
            <div className='text-center'>
                <header>
                    <div style={{background: bg === themes.light.background ? '#6294b8' : bg}} className="header-bg-portfolio-component header-bg-portfolio-component--light">
                        <h1 className='title main-title h2'>Simple <span className='text-danger'>C</span>alculator</h1>
                    </div>
                </header>
                <div className="main-frame">
                    <div className="flex-box input">
                        <div style={{background: bg === themes.light.background ? 'transparent' : '#bdbdbd', color: color}}
                            ref={input} className='input-field'/>
                        <button
                            style={{background: bg === themes.light.background ? '#d6d6d6' : '#dc3545', color: color}}
                            onClick={calculating} className='button-result'>=</button>
                    </div>
                    <div onClick={inputing} className="keyboard flex-box">
                        {renderKeyboard()}
                    </div>
                </div>
            </div>
            <ThemeChangerButton/>
        </section>

    )
}