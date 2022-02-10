function Button({type, setType}) {
    return (
        <button 
            className={type} 
            onClick={() => {
                console.log('clicked');
                setType(type);
            }}
        >
            {type}
        </button> 
        );  
    } 

    export default Button;
