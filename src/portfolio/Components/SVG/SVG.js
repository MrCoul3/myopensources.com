import './a.scss';
import sector from './sector.svg';
export default function SVG() {
    const data = ` 
                M 0 188.5
                L 348.5 537
                A 300 300 0 0 1 454.5 493
                L 454.5 0
                A 643 643 0 0 0 0 188.5`

    return (
        <div className={'sector'}>
            <img className={'sector-img'} src={sector} alt=""/>
            {/*<svg version="1.1"*/}
            {/*     baseProfile="full"*/}
            {/*     width='454.5' height='538'*/}
            {/*     xmlns=""*/}
            {/*>*/}
            {/*    /!*<path d="M1 189.5L349.5 538C385.249 507.098 408.155 496.723 455.5 494V1C246.967 13.0596 148.869 57.1415 1 189.5Z" stroke="black" fill='none'/>}*!/*/}
            {/*    <path d="*/}
            {/*    M 0 188.5*/}
            {/*    L 348.5 537*/}
            {/*    A 300 300 0 0 1 454.5 493*/}
            {/*    L 454.5 0*/}
            {/*    A 643 643 0 0 0 0 188.5*/}
            {/*    " stroke='red' fill='none'/>*/}

            {/*</svg>*/}
        </div>
    );
}