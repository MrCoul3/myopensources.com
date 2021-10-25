import ReactTooltip from "react-tooltip";
import {NavLink} from "react-router-dom";
import backBtn from "../../images/icons/back.svg";
import React from "react";
import './BackToHomeBtn.scss';

const tooltipsParams = {
    'data-background-color': "#5A5A5A",
    'data-text-color': "#fff",
    'data-for': 'toolTip1'
};

export default function BackToHomeBtn() {
    return (
        <>
            <ReactTooltip effect='solid' id="toolTip1"/>
            <div {...tooltipsParams} data-tip='back to home page' className='BackToHomeBtn'>
                <NavLink to='/portfolio'>
                    <img className='img-fluid' src={backBtn} alt="back to main"/>
                </NavLink>
            </div>
        </>
    )
}