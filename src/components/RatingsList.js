import IndividualBrand from './IndividualBrand.js';


const RatingsList = (props) =>  {
    
    const brandComponents = props.brandData.map((brand) => {
        return (
        <li key={brand.nameData}>
            <IndividualBrand 
            name={brand.name} 
            rating={brand.rating} 
            summary={brand.summary}/>
        </li>
        );


    });

    
   

    return (<article>  
        <h2>Brand Ratings:</h2>
        <ul> 
           {brandComponents}
        </ul>
        </article>);
}

export default RatingsList;