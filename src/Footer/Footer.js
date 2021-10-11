import React, {useEffect, useState, useRef} from 'react';
import './Footer.scss';
import github from './images/github.svg';
import instagram from './images/instagram.svg';
import skype from './images/skype.svg';
import telegram from './images/telegram.svg';
import whatsapp from './images/whatsapp.svg';
export default function Footer() {
    return (
        <footer>
            <div className='footer-frame'>
                <div className="social-net-container">
                    <ul>
                        <li><a href="https://github.com/MrCoul3?tab=repositories" target='_blank'><img src={github} alt=""/></a></li>
                        <li><a href="https://www.instagram.com/coul3/" target='_blank'><img src={instagram} alt="instagram"/></a></li>
                        <li><a href="https://join.skype.com/invite/m55LU6wDgKor" target='_blank'><img src={skype} alt="skype"/></a></li>
                        <li><a href="https://t.me/mr_coul" target='_blank'><img src={telegram} alt="telegram"/></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=79623738935" target='_blank'><img src={whatsapp} alt="whatsapp"/></a></li>
                    </ul>
                    <p className='language'>
                        mr.coul@inbox.ru
                        {/*<a href="">mr.coul@inbox.ru</a>*/}
                    </p>
                </div>
            </div>
        </footer>
    );
}