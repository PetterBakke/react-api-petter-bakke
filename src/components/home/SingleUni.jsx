import React from 'react'
import { Link } from 'react-router-dom'; 
import { PropTypes} from 'prop-types';


function SingleUni({ name, web_pages }) {
  return (
     <Link to={`${name}`}>
            <h5>{name}</h5>
            <p>{web_pages}</p>
    </Link> 
  );
}


SingleUni.propTypes = {
  name: PropTypes.string.isRequired,
  web_pages: PropTypes.array.isRequired,
};

export default SingleUni;


