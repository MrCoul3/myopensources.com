import {Route, NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import './NavMenu.scss';


function binaryAnimatedNavMenu(navLink) {
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].onmouseover = showAnimation;
        navLink[i].onmouseout = hideAnimation;
    }

    function showAnimation() {
        this.childNodes[1].style.marginLeft = '0';
        this.childNodes[2].style.marginLeft = '0';
    }

    function hideAnimation() {
        this.childNodes[1].style.marginLeft = '-100%';
        this.childNodes[2].style.marginLeft = '-200%';

    }
}

export default function NavMenu(props) {

    useEffect(() => {
        const navLink = document.querySelectorAll('.link-wrap');
        binaryAnimatedNavMenu(navLink);
    }, []);

    return (
        <nav>

            <div className='nav-container flex-box'>

                <Route path='/:page' render={()=>
                    <div className={`link-wrap link-wrap--home`}>
                        <NavLink to='/'>HOME</NavLink>
                        <div className="bgColor1"/>
                        <div className="bgColor2"/>
                    </div>
                }>
                </Route>

                    {[
                        {path: '/about', name: 'ABOUT ME', key: 0, className: 'about'},
                        {path: '/portfolio', name: 'PORTFOLIO', key: 1,className: 'portfolio'},
                        // {path: '/development', name: 'DEVELOPMENT'}
                    ].map(elem =>
                        <div className={`link-wrap link-wrap--${elem.className} ${props.hideOnMobile}`}>
                            <NavLink key={elem.key.toString()}
                                     activeClassName='nav-menu-active-element' to={elem.path}>{elem.name}

                            </NavLink>
                            <div className="bgColor1"/>
                            <div className="bgColor2"/>
                        </div>
                    )}

            </div>
        </nav>
    );
}

