import {useDispatch} from "react-redux";
import React, {useState} from "react";

export default function Header() {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState();
    const handleChange = (e) => setInputValue(e.target.value)
    const [count, setCount] = useState(0);

    function handleKeyDown(e) {
        const InputDataTrimmed = e.target.value.trim();
        setCount(count + 1);
        if (e.key === 'Enter' && InputDataTrimmed) {
            dispatch({type: 'addNote', payload: InputDataTrimmed, count: count})
            setInputValue('');
        }
    }


    return (
        <header>
            <div className="header-bg-portfolio-component header-bg-portfolio-component--todoBg flex-box align-items-center justify-content-center">
                <h1 className='title main-title h2'><span className='text-warning'>ToDo</span></h1><p className='text-muted'>Redux</p>
            </div>
            <div className='text-center mt-3'>
                <input
                    onChange={handleChange}
                    value={inputValue}
                    className='main-input form-control w-50'
                    onKeyDown={handleKeyDown}
                    autoFocus={true}
                    type="text"
                />
            </div>
        </header>
    );
}