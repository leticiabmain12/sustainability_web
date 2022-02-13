function Button({type, onTypeChanged, label}
    // {topratingsApi, setTopratingsApi}
    ) {
    return (
        <button 
            className={type} 
            onClick={() => {
                console.log(' button clicked');
                onTypeChanged(type)
                // setType(type)
                // setRatingsApi(ratingsApi)
                // setTopratingsApi(topratingsApi)
                ;
            }}
        >
            {label}
        </button> 
        );  
    } ;



export default Button;
