import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({customers, urlpath}) => {
  return (
    <div>
      <div className="customers-list">
        {
          customers.map( c=> 
            <CustomerListItem 
              key={c.dni}
              dni={c.dni}
              name = {c.name}
              editAction={'Editar'}
              delAction={'Eliminar'}
              urlpath={urlpath}
          />
          )
        }
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlpath: PropTypes.string.isRequired,
  
};

export default CustomerList;
