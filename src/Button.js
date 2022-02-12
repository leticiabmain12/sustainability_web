function Button({type, setType},{ratingsApi, setRatingsApi},
    // {topratingsApi, setTopratingsApi}
    ) {
    return (
        <button 
            className={type} 
            onClick={() => {
                console.log('clicked');
                setType(type)
                setRatingsApi(ratingsApi)
                // setTopratingsApi(topratingsApi)
                ;
            }}
        >
            {type}
        </button> 
        );  
    } ;



export default Button;