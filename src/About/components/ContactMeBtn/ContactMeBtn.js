import React, {useEffect, useState} from "react";
import './ContactMeBtn.scss';
import github from './images/github.svg';
import instagram from './images/instagram.svg';
import skype from './images/skype.svg';
import telegram from './images/telegram.svg';
import whatsapp from './images/whatsapp.svg';

export default function ContactMeBtn() {

    // const [marginRight, setMarginRight] = useState('-220px');
    // const [letterSpacing, setLetterSpacing ] = useState();
    // const [top, setTop] = useState('-40px');
    const [windowWidth, setWindowWidth] = useState(window.screen.width);
    const [styles, setStyle] = useState({
        marginRight: '-220px',
        letterSpacing: '1px',
        top: '-40px'
    });

    function onclick() {
        setWindowWidth(window.screen.width);
        if (windowWidth > 768) {
            if (styles.marginRight === '-220px') {
                setStyle({marginRight: '10px', letterSpacing: '10px'});
            } else {
                setStyle({marginRight: '-220px', letterSpacing: '1px'});
            }
        } else {
            if (styles.top === '-40px') {
                setStyle({top: '30px', letterSpacing: '10px'});
            } else {
                setStyle({top: '-40px',letterSpacing: '1px'});
            }
        }
    }


    return (
      <div id={'ContactMeBtn'}>
          <div style={{marginRight: styles.marginRight, top: styles.top}} className={'ContactMeBtn-social-net'}>
              <a href="https://github.com/MrCoul3?tab=repositories">
                  <img src={github} alt="github"/>
              </a>
              <a href="https://www.instagram.com/coul3/">
                  <img src={instagram} alt="instagram"/>
              </a>
              <a href="https://join.skype.com/invite/m55LU6wDgKor">
                  <img src={skype} alt="skype"/>
              </a>
              <a href="https://t.me/mr_coul">
                  <img src={telegram} alt="telegram"/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=79623738935">
                  <img src={whatsapp} alt="whatsapp"/>
              </a>
          </div>
          <button style={{letterSpacing: styles.letterSpacing}} onClick={onclick} className={'ContactMeBtn-button'}>contact me</button>
      </div>
    );
}