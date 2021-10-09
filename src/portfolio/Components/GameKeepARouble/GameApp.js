import './GameApp.scss';
import {useEffect, useState} from "react";

function Coin(props) {
    return <div style={{top: props.top, left: props.left}} className='coin'></div>
}

export default function GameApp() {

    const [offset, setOffset] = useState();
    useEffect(() => {
        let mainFrame = document.querySelector('.main-frame');
        setOffset(mainFrame.offsetLeft)
        window.addEventListener('resize', () => {
            setOffset(mainFrame.offsetLeft)
        })
    }, [offset])

    const [x, setX] = useState();

    function getCoords(e) {
        setX(e.clientX - offset - 50)
    }

    const [stylesBtnStart, setStylesBtnStart] = useState('block');
    const [gameState, setGameState] = useState('stop');
    const [coinVerticalMoving, setCoinVerticalMoving] = useState(-20);
    function startGame() {
        setStylesBtnStart('none');
        setGameState('play');
    }
    function coinMove() {
        setInterval(()=> {
            setCoinVerticalMoving(prevState => prevState < 400
                ? prevState + 1
                : 400)
        }, 100)
    }

    useEffect(()=> {
        if (gameState === 'play') {
            // for (let i = -20; i < 400; i++) {
            //     setCoinVerticalMoving(i);
            // }
            coinMove();
        }
        // console.log(coinVerticalMoving)

    }, [coinVerticalMoving, gameState])

    return (
        <section id='GameApp' onMouseMove={getCoords}>
            <div className='main-frame'>
                <button style={{display: stylesBtnStart}} onClick={startGame} className={'start-button'}>start</button>
                <Coin top={coinVerticalMoving} />
                <div style={{left: x}} className='keeper'></div>
            </div>
        </section>
    );
}