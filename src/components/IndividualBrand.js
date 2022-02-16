import React  from "react";
import PropTypes from 'prop-types';

const IndividualBrand = (props) =>  {
    return (
            <div className="brand-content">
                <div className="brand-name">{props.name}</div>
            <div  className="brand-rating">{props.rating}</div>
        <div  className="brand-summary">{props.summary}</div></div>
        
    );

// IndividualBrand.propTypes = {
//     name: PropTypes.string.isRequired,
//     rating: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
// };

};

export default IndividualBrand;