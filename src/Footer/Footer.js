import React, {useEffect, useState, useRef} from 'react';
import './Footer.scss';
export default function Footer() {
    return (
        <footer>
            <div className='footer-frame'>
                <div className="social-net-container">
                    <ul>
                        <li><a href=""><img src="/images/icons/instagram.svg" alt=""/></a></li>
                        <li><a href=""><img src="/images/icons/vk.svg" alt=""/></a></li>
                        <li><a href=""><img src="/images/icons/skype.svg" alt=""/></a></li>
                        <li><a href=""><img src="/images/icons/telegram.svg" alt=""/></a></li>
                        <li><a href=""><img src="/images/icons/whatsapp.svg" alt=""/></a></li>
                    </ul>
                    <p className='language'><a href="">change language</a></p>
                </div>
            </div>
        </footer>
    );
}