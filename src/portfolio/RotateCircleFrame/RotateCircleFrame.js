import oneCircle from './images/one-circle.png';
import twoCircle from './images/two-circle.png';
import threeCircle from './images/three-circle.png';
import fourCircle from './images/four-circle.png';
import './RotateCircleFrame.scss';

export default function RotateCircleFrame() {

    return (
        <section id='RotateCircleFrame'>
            <div className='RotateCircleFrame-container'>
                <img className='first-element' src={oneCircle} alt=""/>
                <img className='second-element' src={twoCircle} alt=""/>
                <img className='three-element' src={threeCircle} alt=""/>
                <img className='four-element' src={fourCircle} alt=""/>
            </div>
        </section>
    );
}