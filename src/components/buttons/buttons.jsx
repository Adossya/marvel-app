import "./style.scss";


const Buttons = ({onClick, src, color, name, disabled, style}) => {


    let clazz = color === 'green' ? 'buttons green' : 'buttons red';

    return (
        <button 
            onClick={onClick}
            href={src} 
            className={clazz}
            disabled={disabled}
            style={style}
            
            >
            <a href={src}>{name}</a>
        </button>
    );
}
 


export default Buttons;