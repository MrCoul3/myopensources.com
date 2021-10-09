import React, {useEffect, useState, useRef} from 'react';


import NavMenu from "./components/NavMenu/NavMenu";
import MainDescription from "./components/MainDescription/MainDescription";
import MainPhoto from "./components/MainPhoto/MainPhoto";
import MainTitle from "./components/MainTitle/MainTitle";

import './Header.scss';


export default function Header(props) {



    return (

        <header className={'main-header ' + props.animation.header}>

            <div className={'header-bg '}>

                <div className={'header-wrapper '}>

                    <MainTitle/>
                    <MainDescription/>
                    <MainPhoto/>
                </div>

                <NavMenu hideOnMobile={props.animation.navMenu}/>

            </div>

        </header>
    );
}
