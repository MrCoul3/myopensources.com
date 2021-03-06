import React from "react";
import {Route, Switch, NavLink} from "react-router-dom";
import ReactNotesApp from "./Components/ReactNotes/ReactNotesApp";
import ReactCalculatorApp from "./Components/ReactSimpleCalculator/ReactCalculatorApp";
import AppConverter from "./Components/CurrencyConverter/AppConverter";
import ReduxToDoApp from "./Components/ReduxApps/ToDoApp/ToDoApp";
import Palette from "./Components/Palette/Palette";
import './Portfolio.scss'
import noteIco from './images/component-icons/note-app-icon.png';
import converterIco from './images/component-icons/currencyconverter-app-icon.png';
import calculatorIco from './images/component-icons/calculator-app-icon.png';
import todoIco from './images/component-icons/todo-app-icon.png';
import rusfriendIcon from './images/component-icons/rusfriend-icon.png';
import paletteIcon from './images/component-icons/palette-icon.png';
import 'bootstrap/dist/css/bootstrap.css';
import BackToHomeBtn from "./Components/BackToHomeBtn/BackToHomeBtn";




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
                                <div className='text-center'>React + API + Material-UI</div>
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
                <Route exact path='/portfolio/converter' component={AppConverter}/>
                <Route exact path='/portfolio/calculator' component={ReactCalculatorApp}/>
                <Route exact path='/portfolio/todo' component={ReduxToDoApp}/>
                <Route exact path='/portfolio/palette' component={Palette}/>
            </Switch>

        </div>
    )
}