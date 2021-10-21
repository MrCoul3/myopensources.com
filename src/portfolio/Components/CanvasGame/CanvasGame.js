import './CanvasGame.scss';
import {useEffect, useRef, useState} from "react";
export default function CanvasGame() {
    const canvas = useRef(null);
    let pos = 0;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(()=> {
        const ctx =  canvas.current.getContext('2d');
        const cx = window.innerWidth;
        const cy = window.innerHeight;
        ctx.clearRect(0, 0, cx, cy)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        // ctx.lineTo(cx/2 + 100, cy/2+100)
        ctx.arcTo(100, 200, 200, 100, 100);
        ctx.stroke();
    }, [ canvas]);

    function move(e) {
        setX(e.clientX);
        setY(e.clientY);
    }


    return (
        <section  className={'CanvasGame'}>
            <canvas width={window.innerWidth} height={window.innerHeight} onMouseMove={move}  ref={canvas} id={'CanvasGame'}>

            </canvas>
        </section>
    );
}