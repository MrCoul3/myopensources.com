import React, {useState, useEffect, useRef, useContext} from 'react';
import {Route, useLocation, Redirect, Switch, useHistory} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Portfolio from "./portfolio/Portfolio";
import PageNotFound from "./404/404";
import './App.scss';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

const animation = {
    header: '',
    main: '',
    navLink: ''
};

export const AnimationContext = React.createContext(animation);

export default function App() {

    const context = useContext(AnimationContext);
    const location = useLocation();
    const main = useRef(null);
    const body = document.querySelector('body');
    const [state, setState] = useState(context);

    useEffect(() => {

        if (location.pathname !== '/') {
            window.scrollTo(0, 0);

            setState(prevState => {
                const newState = {...prevState};
                newState.header = 'main-header--animate';
                newState.navLink = 'nav-menu-hidden';
                return newState;
            });
            setTimeout(() => body.style.overflow = 'visible', 800)
            main.current.style.height = `${main.current.scrollHeight}px`

        } else {
            window.scrollTo(0, 0);
            setState(prevState => {
                const newState = {...prevState};
                newState.header = '';
                newState.main = '';
                newState.navLink = '';
                return newState;
            });
            // body.style.overflow = 'hidden';
            main.current.style.height = `${main.current.scrollHeight}px`;

            window.getComputedStyle(main.current, null).getPropertyValue("height");
            main.current.style.height = '0px';
        }
    }, [location])

    function transitionEnd() {
        if (state.header !== '') {
            setState(prevState => {
                const newState = {...prevState};
                newState.header = 'main-header--animate main-header--fixed';
                newState.main = 'App-main--auto';
                return newState;
            })
            main.current.style.height = 'auto';
            console.log(state)
        }
    }

    return (
        <section className='App'>

            <AnimationContext.Provider value={state}>

                <Header />

                <main onTransitionEnd={transitionEnd} className={'App-main ' + state.main}
                      ref={main}
                      id={'App-main'}>

                    <TransitionGroup >
                        <CSSTransition
                            key={location.key}
                            appear={true}
                            classNames="fade"
                            timeout={500}
                        >
                            <Switch location={location}>
                                <Route exact path='/'/>

                                {['/about', '/portfolio'].map(path =>
                                    <Route path={path} render={() =>
                                        <section className='main-page'>
                                            {path === '/about' ? <About/> : <Portfolio/>}
                                        </section>
                                    }>
                                    </Route>
                                )}
                                <Redirect to={PageNotFound} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </main>

                <Footer/>
            </AnimationContext.Provider>



        </section>


    );
}
