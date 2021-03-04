import s from './input.module.css'

const Input = ({placeholder, handleChange}) => {
    return (
        <input type="text" className={s.input} placeholder={placeholder} onChange={handleChange}/>
    );
}

export default Input;
