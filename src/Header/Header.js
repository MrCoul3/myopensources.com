import React, {useEffect, useState, useRef} from 'react';
import './Header.scss';
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";


function binaryAnimatedNavMenu(navLink) {
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].onmouseover = showAnimation;
        navLink[i].onmouseout = hideAnimation;
    }

    function showAnimation() {
        if (window.pageYOffset < 132) {
            this.childNodes[1].style.marginLeft = '0';
            this.childNodes[2].style.marginLeft = '0';
        } else {
            this.childNodes[2].style.marginLeft = '+100%';
        }
    }

    function hideAnimation() {
        if (window.pageYOffset < 132) {
            this.childNodes[1].style.marginLeft = '-100%';
            this.childNodes[2].style.marginLeft = '-200%';
        } else {
            this.childNodes[2].style.marginLeft = '-200%';
        }
    }
}


export default function Header() {
    const [logoState, setLogoState] = useState(); // анимация логотипа

    // анимация элементов меню навигации
    useEffect(() => {
        const navLink = document.querySelectorAll('.link-wrap');
        binaryAnimatedNavMenu(navLink);
    }, []);

    // анимация появления
    const [mainNameAnimation, setMainNameAnimation] = useState(0);
    const [mainDescrAnimation1, setMainDescrAnimation1] = useState(0);
    const [mainDescrAnimation2, setMainDescrAnimation2] = useState(0);
    const [mainDescrAnimation3, setMainDescrAnimation3] = useState(0);
    const [linkAboutAnimation, setLinkAboutAnimation] = useState(0);
    const [linkPortfolioAnimation, setLinkPortfolioAnimation] = useState(0);
    useEffect(() => {
        const timer = () => {
            setTimeout(() => {
                setMainNameAnimation('main-name-animation');
            }, 800);
            setTimeout(() => {
                setMainDescrAnimation1('main-description-animation');
            }, 1400);
            setTimeout(() => {
                setMainDescrAnimation2('main-description-animation');
            }, 1900);
            setTimeout(() => {
                setMainDescrAnimation3('main-description-animation');
            }, 2400);
            setTimeout(() => {
                setLinkAboutAnimation('nav-link-animation');
            }, 1000);
            setTimeout(() => {
                setLinkPortfolioAnimation('nav-link-animation');
            }, 1500);
        }
        timer();
        return clearTimeout(timer);
    }, [])


    const [coords, setCoords] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setCoords(Math.floor(window.pageYOffset))
            // console.log(coords)
        })
        console.log(coords)
        headerAnimation();
    }, [coords])

    // анимация при прокрутке
    const mainPhoto = useRef(null);
    const description = useRef(null);
    const navMenu = useRef(null);
    const mainName = useRef(null);
    const nLogo = useRef(null);
    const header = useRef(null);
    function headerAnimation() {

        // const descriptionElements = description.current.childNodes;
        // (coords > 200) ? descriptionElements[0].style.opacity = 0 : descriptionElements[0].style.opacity = 1;
        // (coords > 220) ? descriptionElements[1].style.opacity = 0 : descriptionElements[1].style.opacity = 1;
        // (coords > 240) ? descriptionElements[2].style.opacity = 0 : descriptionElements[2].style.opacity = 1;
        if (coords > 250) {
            mainName.current.classList.add('main-name-onscroll-animated');
            nLogo.current.style.opacity = 0;
            navMenu.current.classList.add('nav-animated')
        } else {
            mainName.current.classList.remove('main-name-onscroll-animated');
            nLogo.current.style.opacity = .4;
            navMenu.current.classList.remove('nav-animated');
        }
        if (coords > 405) {
            header.current.classList.add('header-animated');
        } else {
            header.current.classList.remove('header-animated');
        }


    }

    return (
        <header ref={header}>
            <div className='header-bg'>
                <img ref={nLogo} onMouseOver={() => setLogoState('n-logo-onmouse-over')}
                     onMouseOut={() => setLogoState('n-logo-onmouse-out')}
                     className={`n-logo ${logoState}`}
                     src="../images/logo.svg" alt="logo"/>
                <h1 ref={mainName} className={`main-name color-white ${mainNameAnimation}`}>IVANOV NIKOLAY</h1>
                <div ref={description} className='main-description color-white flex-box'>
                    <h2 className={`front-end-skill ${mainDescrAnimation1}`}>FRONT-END</h2><h2
                    className={`react-skill ${mainDescrAnimation2}`}>REACT</h2><h2
                    className={`developer-skill ${mainDescrAnimation3}`}>DEVELOPER</h2>
                </div>
                <nav ref={navMenu}>
                    <div className='nav-container flex-box'>
                        <div className={`link-wrap link-wrap--about ${linkAboutAnimation}`}>
                            <NavLink activeClassName='nav-menu-active-element' to='/about'>ABOUT ME</NavLink>
                            <div className="bgColor1"></div>
                            <div className="bgColor2"></div>
                        </div>
                        <div className={`link-wrap link-wrap--portfolio ${linkPortfolioAnimation}`}>
                            <NavLink activeClassName='nav-menu-active-element' to='/portfolio'>PORTFOLIO</NavLink>
                            <div className="bgColor1"></div>
                            <div className="bgColor2"></div>
                        </div>
                    </div>
                </nav>
            </div>
            <img ref={mainPhoto} style={{width: `${210 - coords}px`}} className='main-photo' src="../images/main-photo.png" alt=""/>

        </header>
    );
}
//
// 1 --> 210 (coords + 1)
// 100 --> 105px
//200 --> 52px