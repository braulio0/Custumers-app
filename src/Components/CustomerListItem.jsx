import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CustomerListItem = ({ name, editAction, delAction, dni, urlpath }) => {
  return (
    <div>
      <div className="customers-list-item">
        <div className="field">
          <Link to ={`${urlpath}${dni}`}> {name}</Link>
        </div>
        <div className="field">
          <Link to ={`${urlpath}${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to ={`${urlpath}${dni}/del`}>{delAction}</Link>
        </div>
      </div> 
    </div>
  );
};

CustomerListItem.propTypes = {
  urlpath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
};

export default CustomerListItem;
