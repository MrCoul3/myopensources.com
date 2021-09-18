import './App.scss';
import React, {useState, useEffect, useRef} from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";
import About from "./About/About";
import Portfolio from "./portfolio/Portfolio";

export default function App() {

    return (
        <section className="App">
            <Router>
                {/*<Redirect from='/' to='/about'/>*/}
                <Header />
                <Route path='/about' component={About}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Switch>
                    <Route exact path='/about'/>
                    <Route exact path='/portfolio'/>
                </Switch>
                <Footer />
            </Router>

        </section>
    );
}
