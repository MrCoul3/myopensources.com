import React from "react";
import './MainDescription.scss';

export default function MainDescription() {
    return (
        <div className='main-description color-white flex-box'>
            <h2 className='main-description__element main-description__element--front-end-skill'>FRONT-END</h2>
            <h2 className='main-description__element main-description__element--developer-skill'>DEVELOPER</h2>
        </div>
    );
}