import React, {useEffect, useState} from "react";
import './TextReader.scss';
import ReactTooltip from "react-tooltip";

const tooltipsParams = {
    'data-background-color': "#5a5a5a",
    'data-text-color': "#fff",
    'data-for': 'toolTip1'
};


export default function TextReader() {

    const textData = 'Meet my family. There are five of us – my parents, my elder brother, my baby sister and me.'.split(' ');
    const [currentWord, setCurrentWord] = useState('');
    const [infoVisibility, setInfoVisibility] = useState('none')
    function openWord(e) {
        setCurrentWord(e.target.innerHTML)

    }

    useEffect(() => {
        fetch(`translate.yandex.ru/?lang=en-ru&utm_source=wizard&text=yes`)
            .then(response=>console.log(response))
            // .then(data=>console.log(data))
        // console.log(currentWord)
        if (currentWord !== '') {
            setInfoVisibility('block')
        }
    }, [currentWord]);

    return (
        <section id={'TextReader'}>
            {/*<ReactTooltip effect='solid' id="toolTip1"/>*/}
            <div style={{display: infoVisibility}} className={'info'}>{currentWord}</div>
            <div>
                {textData.map((word, index) =>
                    <>
                        <span key={index} onClick={openWord} className={'word'}>{word} </span>
                    </>
                )}
            </div>
        </section>
    );
}