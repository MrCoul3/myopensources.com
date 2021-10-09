import React, {useState, useEffect, useRef} from 'react';
import {Route, useLocation, Redirect, Switch} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Portfolio from "./portfolio/Portfolio";
import PageNotFound from "./404/404";
import './App.scss';






export default function App() {

    const location = useLocation();
    const [headerAnimation, setHeaderAnimation] = useState({});
    const main = useRef(null);
    const mainCurrent = main.current;
    const [appMainStyles, setAppMainStyles] = useState({});


    useEffect(()=> {
        if (location.pathname !== '/') {
            setHeaderAnimation({
                header: 'main-header--collapse-animation',
                navMenu: 'nav-menu-hidden'
            });
            if (mainCurrent) {
                setAppMainStyles({
                    height: mainCurrent.scrollHeight + 50,
                    marginTop: '50px',
                    marginBottom: '50px'
                })
                // console.log(mainCurrent.scrollHeight)
            }
        } else {
            setHeaderAnimation('');
            setAppMainStyles({
                height: '0px',
                marginTop: '0px',
                marginBottom: '0px'
            })

        }
    }, [location])



    return (
        <section className='App'>

            <Header animation={headerAnimation}/>

            <main
                onTransitionEnd={ () => mainCurrent.style.height = 'auto' }
                  ref={main} id={'App-main'}
                  style={{
                      height: appMainStyles.height,
                      marginTop: appMainStyles.marginTop,
                      marginBottom: appMainStyles.marginBottom
                  }}>
                <Switch>
                    <Route exact path='/'/>

                    {['/about', '/portfolio'].map(path =>
                        <Route  path={path} render={() =>
                            <section className='main-page'>
                                {path === '/about' ? <About/> : <Portfolio/>}
                            </section>
                        }>
                        </Route>
                    )}
                    <Route component={PageNotFound} />
                </Switch>

            </main>

            <Footer/>

        </section>


    );
}
