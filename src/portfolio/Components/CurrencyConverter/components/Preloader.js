import loader from '../images/loader.gif';
export default function Preloader(props) {
    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '70%',
            backgroundColor: '#fff',
            zIndex: 100,
            display: props.display
        }}>
            <img style={{margin: '0 auto'}} src={loader} alt="loader"/>
        </div>
    )
}