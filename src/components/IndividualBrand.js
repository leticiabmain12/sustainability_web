import React  from "react";
import PropTypes from 'prop-types';

const IndividualBrand = (props) =>  {
    return (
        <ul>
            <li>Name: {props.name}</li>
            <li>Rating: {props.rating}</li>
            <li>Summary: {props.summary}</li>
        </ul>
    );

// IndividualBrand.propTypes = {
//     name: PropTypes.string.isRequired,
//     rating: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
// };

};

export default IndividualBrand;