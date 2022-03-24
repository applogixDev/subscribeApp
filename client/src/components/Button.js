const Button = ({type,size="md",text,handleClick}) =>{

    return(

       <>
       <button onClick={handleClick} className={`btn btn-${type} btn-${size}`}>
           {text}
       </button>
       </>
    );

}

export default Button;