import './StartRing.scss';
import {useEffect, useState} from "react";
export default function StartRing(props) {

    const [startRingRotation, setStartRingRotation] = useState('');
    const [startBtnRotation, setStartBtnRotation] = useState('');

    useEffect(()=> {
        setStartRingRotation('start-ring-rotate');
    }, [])

    function start() {
        setStartBtnRotation('start-btn-rotate');
        setStartRingRotation('start-ring-hide');
    }

    return (
        <div onClick={props.wrapShow} className="start-ring-container">
            <div className={startRingRotation} id="start-ring" />
            <div className={startBtnRotation} onClick={start} id="start-btn"/>
        </div>
    );
}