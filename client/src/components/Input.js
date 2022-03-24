import './input.css';
const Input = ({label,value, setValue,type}) =>{

    return (
       
        <div className="input-group mb-3">
            <span className="input-group-text bgc">{label}</span>
            <input type={type} onChange={e => setValue(e.target.value)} value={value} className="form-control"/>

        </div>
        

    );
}

export default Input;