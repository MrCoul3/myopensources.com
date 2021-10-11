import React, {useState, useEffect, useRef} from 'react';
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

const language = {
    russian: {

    },
    english: {

    }
}
const ContextLanguage = React.createContext(language);


export default function App() {

    const location = useLocation();
    const [headerAnimation, setHeaderAnimation] = useState({});
    const main = useRef(null);
    const mainCurrent = main.current;
    const [appMainStyles, setAppMainStyles] = useState({});
    const [heightAuto, setHeightAuto] = useState();
    const [headerFixed, setHeaderFixed] = useState();

    useEffect(() => {
        if (location.pathname !== '/') {
            setHeaderAnimation({
                header: 'main-header--collapse-animation',
                navMenu: 'nav-menu-hidden',
            });

            if (mainCurrent) {
                setAppMainStyles({
                   heightNumbers: 'App-main-extended',
                });
                setTimeout(()=>setHeightAuto('App-main-height-auto'), 800)
                setTimeout(()=>setHeaderFixed('main-header--fixed'), 300)
            }
        } else {
            setHeightAuto('');
            setHeaderFixed('')
            setTimeout(()=>{
                setHeaderAnimation({
                    header: '',
                    navMenu: '',
                });
                setAppMainStyles({
                    heightNumbers: 'App-main-collapsed',
                });
            }, 100)

        }
    }, [location, mainCurrent, heightAuto])


    return (
        <section className='App'>

            <ContextLanguage.Provider>
                <Header fixed={headerFixed} animation={headerAnimation}/>

                <main className={appMainStyles.heightNumbers + ' ' + heightAuto}
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
                                <Route component={PageNotFound}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>


                </main>

                <Footer/>
            </ContextLanguage.Provider>



        </section>


    );
}
