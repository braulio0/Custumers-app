import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({customers}) => {
  return (
    <div>
      <div className="customers-list">
        {
          customers.map( c=> 
            <CustomerListItem 
              key={c.dni}
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
