import React from "react";
import {Route, Switch, NavLink} from "react-router-dom";
import ReactTooltip from "react-tooltip";
import ReactNotesApp from "./Components/ReactNotes/ReactNotesApp";
import ReactCalculatorApp from "./Components/ReactSimpleCalculator/ReactCalculatorApp";
import Converter from "./Components/ReactConverter/Converter";
import ReduxToDoApp from "./Components/ReduxApps/ToDoApp/ToDoApp";
import Palette from "./Components/Palette/Palette";
import './Portfolio.scss'
import noteIco from './images/component-icons/note-app-icon.png';
import converterIco from './images/component-icons/converter-app-icon.png';
import calculatorIco from './images/component-icons/calculator-app-icon.png';
import todoIco from './images/component-icons/todo-app-icon.png';
import rusfriendIcon from './images/component-icons/rusfriend-icon.png';
import paletteIcon from './images/component-icons/palette-icon.png';
import backBtn from './images/icons/back.svg';
import 'bootstrap/dist/css/bootstrap.css';

const tooltipsParams = {
    'data-background-color': "#5A5A5A",
    'data-text-color': "#fff",
    'data-for': 'toolTip1'
};

function BackToHomeBtn() {
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

export default function Portfolio() {
    return (
        <div className='page' id='Portfolio'>
            <Route exact path='/portfolio/:react' render={() =>
                <BackToHomeBtn/>
            }/>

            <Route exact path='/portfolio' render={() =>
                <div className='main'>
                        <div className="components-menu">
                            <a href="https://rusfriend.com" target='_blank'>
                                <img className='component-icon' src={rusfriendIcon}
                                     alt="rusfriend.com"/>
                                <div className='text-center'>PHP + SQL + LAMP + JQuery + Vue.js</div>
                            </a>
                            <NavLink  to='/portfolio/react-notes'>
                                <img className='component-icon' src={noteIco}
                                     alt="react-notes"/>
                                <div className='text-center'>React + TypeScript</div>
                            </NavLink>
                            <NavLink to='/portfolio/converter'>
                                <img className='component-icon' src={converterIco}
                                     alt="converter"/>
                                <div className='text-center'>React + TypeScript</div>
                            </NavLink>
                            <NavLink to='/portfolio/calculator'>
                                <img className='component-icon' src={calculatorIco}
                                     alt="calculator"/>
                                <div className='text-center'>React + TypeScript + React.Context</div>
                            </NavLink>
                            <NavLink to='/portfolio/todo'>
                                <img className='component-icon' src={todoIco}
                                     alt="todo"/>
                                <div className='text-center'>React + Redux</div>
                            </NavLink>
                            <NavLink to='/portfolio/palette'>
                                <img className='component-icon' src={paletteIcon}
                                     alt="paletteIcon"/>
                                <div className='text-center'>React + Cookie</div>
                            </NavLink>
                        </div>
                </div>}/>
            <Switch>
                <Route exact path='/portfolio/react-notes' component={ReactNotesApp}/>
                <Route exact path='/portfolio/converter' component={Converter}/>
                <Route exact path='/portfolio/calculator' component={ReactCalculatorApp}/>
                <Route exact path='/portfolio/todo' component={ReduxToDoApp}/>
                <Route exact path='/portfolio/palette' component={Palette}/>
            </Switch>

        </div>
    )
}