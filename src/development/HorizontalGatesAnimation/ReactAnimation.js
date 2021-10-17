import './ReactAnimation.scss';
import React, {useContext, useEffect, useRef, useState} from 'react';

const obj = {
    header: '',
    main: '',
    footer: ''
}

const Context = React.createContext(obj);

function Header(props) {

    const context = useContext(Context);


    return (
        <header onTransitionEnd={props.transitionEnd} className={'RA_header ' + context.header}>
            <button onClick={props.expanding} className={'RA_expand-btn'}>click</button>
        </header>
    )
}

function Footer() {

    const context = useContext(Context);


    return <footer className={'RA_footer ' + context.footer}/>

}

function Main(props) {

    const context = useContext(Context);


    return (
        <main ref={props.main}
              onTransitionEnd={props.transitionEnd}
              className={'RA_main ' + context.main}>
            <div className={'RA_main__inner'} style={{height: '900px', background: '#ABABAB',}}>
                main section
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur doloremque expedita in
                    incidunt qui rerum. Atque blanditiis culpa, ducimus ex expedita fugit inventore magni porro
                    possimus, quasi quibusdam reprehenderit?</p>
            </div>
        </main>
    )
}

export default function ReactAnimation() {

    const context = useContext(Context);
    const [state, setState] = useState(context);
    const body = document.querySelector('body');
    const main = useRef(null);

    function expanding() {
        if (state.header === '') {
            setState(prevState => {
                const newState = {...prevState};
                newState.header = 'RA_header--animate';
                newState.footer = 'RA_footer--animate';
                return newState;
            });
            setTimeout(() => body.style.overflow = 'visible', 800)
            main.current.style.height = `${main.current.scrollHeight}px`
        } else {
            window.scrollTo(0, 0);
            setState(prevState => {
                const newState = {...prevState};
                newState.header = '';
                newState.footer = '';
                newState.main = '';
                return newState;
            });
            body.style.overflow = 'hidden'
            main.current.style.height = `${main.current.scrollHeight}px`;
            window.getComputedStyle(main.current, null).getPropertyValue("height");
            main.current.style.height = '0px';
        }

    }

    function mainTransitionEnd() {
        if (state.header !== '') {
            setState(prevState => {
                const newState = {...prevState};
                newState.header = 'RA_header--animate RA_header--fixed';
                newState.main = 'RA_main--auto';
                return newState;
            })
        }
    }


    return (
        <Context.Provider value={state}>
            <Header expanding={expanding}/>
            <Main transitionEnd={mainTransitionEnd} main={main}/>
            <Footer/>
        </Context.Provider>
    );
}