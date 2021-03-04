import './button.css';

const  Button = ({text, handleClick, children, ...props}) => {
    console.log('####:props',props)
    return (
        <button className="button" onClick={handleClick} {...props}>
            {text}
            {children}
        </button>
    );
}

export default Button;
