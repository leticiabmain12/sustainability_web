import IndividualBrand from './IndividualBrand.js';


const RatingsList = (props) =>  {
   
    const brandComponents = props.brandData.map((brand, idx) => {
        return (
        <div className="brand" key={idx}>
            <IndividualBrand 
            name={brand.name} 
            rating={brand.rating} 
            summary={brand.summary}/>
        </div>
        );


    });

    
   

    return (<article>  
        <h2></h2>
        <div className="ratings-list"> 
           {brandComponents}
        </div>
        </article>);
}

export default RatingsList;