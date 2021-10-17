import React, {useEffect, useState, useRef, useContext} from 'react';
import NavMenu from "./components/NavMenu/NavMenu";
import MainDescription from "./components/MainDescription/MainDescription";
import MainPhoto from "./components/MainPhoto/MainPhoto";
import MainTitle from "./components/MainTitle/MainTitle";
import './Header.scss';
import {AnimationContext} from "../App";

export default function Header(props) {

    const context = useContext(AnimationContext);


    return (

        <header onTransitionEnd={props.transitionEnd} className={'main-header ' + context.header}>

            <div className={'header-bg '}>

                <div className={'header-wrapper ' + context.headerWrapper}>

                    <MainTitle/>
                    <MainDescription/>
                    <MainPhoto/>
                </div>

                <NavMenu />

            </div>

        </header>
    );
}
