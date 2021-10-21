import StartRing from "./components/StartRing";
import './Palette.scss';
import {useEffect, useRef, useState} from "react";
import {setCookie, getCookie} from "../../../serviceFunctions/ServiceFunctions";

export default function Palette() {

    const palette = useRef(null);
    const [wrapShowClass, setWrapShowClass] = useState('');
    const numOfElements = (getCookie("length") === undefined) ? 0 : JSON.parse(getCookie("length"));

    class PaletteElem {
        constructor(color, type, code) {
            this.color = color;
            this.type = type;
            this.code = code;
        }

        append() {
            let paletteElement = document.createElement("div");
            let paletteElementInfo = document.createElement("div");
            let color = document.createElement("span");
            let type = document.createElement("span");
            let code = document.createElement("span");
            paletteElement.classList.add("palette-element");

            if (this.type === "RGB") {
                paletteElement.style.background = `rgb(${this.code})`;
            } else if (this.type === "RGBA") {
                paletteElement.style.background = `rgba(${this.code})`;
            } else if (this.type === "HEX") {
                paletteElement.style.background = this.code;
            }
            paletteElementInfo.classList.add("palette-element__info");
            color.classList.add("color");
            type.classList.add("type");
            code.classList.add("code");
            palette.current.append(paletteElement);
            paletteElement.append(paletteElementInfo);
            paletteElementInfo.append(color, type, code);
            color.innerHTML = this.color;
            type.innerHTML = this.type;
            code.innerHTML = this.code;
        }
    }

    useEffect(()=> {

        // console.log(numOfElements)
        for (let i = 1; i < numOfElements+1; i++) {
            // console.log(JSON.parse(getCookie(`${i}`)).color)
            let newPalette = new PaletteElem(JSON.parse(getCookie(`${i}`)).color, JSON.parse(getCookie(`${i}`)).type, JSON.parse(getCookie(`${i}`)).code);
            newPalette.append();
        }

    }, []);

    function check(check, text) {
        check.innerHTML = text;
    }

    const inputColor = useRef(null);
    const selectType = useRef(null);
    const inputCode = useRef(null);

    const checkColor = useRef(null);
    const checkCode = useRef(null);

    const texts = {
        textCheckColor: 'color can only contain letters',
        textCheckColorCoincide: 'this color already exists',
        textCheckCodeRGB: 'RGB code must match the pattern [0-255], [0-255], [0-255]',
        textCheckCodeRGBA: 'RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]',
        textCheckCodeHEX: 'HEX code must be #-char and 6 digits or letters from A to F'
    }
    const paletteObj = {};
    let count = numOfElements;
    function save(e) {
        e.preventDefault();
        if (inputColor.current.value.length < 1 || !inputColor.current.value.match(/[0-9%/*+-.]/g) == false) {
            check(checkColor.current, texts.textCheckColor);

        } else if (inputColor.current.value === inputColor.current.innerHTML) {
            check(checkColor.current, texts.textCheckColorCoincide);

        } else if (inputCode.current.value.length < 1 || (selectType.current.value === "RGB" && (!inputCode.current.value.match(/\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b/g)) == true)) {
            check(checkCode.current, texts.textCheckCodeRGB);

        } else if (inputCode.current.value.length < 1 || (selectType.current.value === "RGBA" && (!inputCode.current.value.match(/\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, [0-1]/g)) == true)) {
            check(checkCode.current, texts.textCheckCodeRGBA);

        } else if (inputCode.current.value.length < 1 || (selectType.current.value === "HEX" && (!inputCode.current.value.match(/#[A-f0-9][A-f0-9][A-f0-9][A-f0-9][A-f0-9][A-f0-9]/g)) === true)) {
            check(checkCode.current, texts.textCheckCodeHEX);
        } else {
            // setCount(prevState => prevState + 1);
            count++;
            let jsonLength = JSON.stringify(count);
            if (count > 6) {
                count = 1;
                jsonLength = 6;
            }
            let newPalette = new PaletteElem(inputColor.current.value, selectType.current.value, inputCode.current.value);
            newPalette.append();
            // console.log(newPalette)
            paletteObj[count] = newPalette;
            // jsonLength = JSON.stringify(count);
            setCookie("length", jsonLength);
            let jsonData = JSON.stringify(paletteObj[count]);
            setCookie((count), jsonData);

            let palleteElements = document.querySelectorAll('.palette-element');
            if (palleteElements.length > 6) {
                palleteElements[0].remove();
            }
        }
    }


    return (
      <>
          <header>
              <div className="header-bg-portfolio-component header-bg-portfolio-component--palette">
                  <h1  className='title main-title h2'>palette</h1>
              </div>
          </header>
          <StartRing wrapShow={()=>setWrapShowClass('wrap-show')}/>

          <div className={"wrap " + wrapShowClass}>

              <div className="input-area">

                  <h3>Create new color</h3>

                  <form action="">
                      <div className="input-wrap">
                          <div className="flex">
                              <label htmlFor="color">Color</label><span ref={checkColor} className="check check-color"/>
                          </div>
                          <input onFocus={()=>checkColor.current.innerHTML = ''} ref={inputColor} name="color" type="text"/>
                      </div>
                      <div className="input-wrap">
                          <label htmlFor="type">Type</label>
                          <select ref={selectType} name="type" id="">
                              <option value="RGB">RGB</option>
                              <option value="RGBA">RGBA</option>
                              <option value="HEX">HEX</option>
                          </select>
                      </div>
                      <div className="input-wrap">
                          <div className="flex">
                              <label htmlFor="code">Code</label>
                              <span ref={checkCode} className="check check-code"></span>
                          </div>
                          <input onFocus={()=>checkCode.current.innerHTML = ''} ref={inputCode} name="code" type="text"/>
                      </div>
                      <div className="input-wrap" style={{marginBottom: "20px"}}>
                          <input onClick={save} type="submit" value="Save"/>
                      </div>

                  </form>

              </div>

              <div className="color-area">
                  <h3>All colors</h3>
                  <div ref={palette} className="palette"/>
              </div>

          </div>

      </>
    );
}