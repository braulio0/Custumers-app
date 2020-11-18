import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2> Edición del cliente</h2>
        <form action="">
          <div>
            <label htmlFor="name">Nombre: </label> 
              <Field name="name" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="dni">DNI: </label> 
              <Field name="dni" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="age">Edad: </label> 
              <Field name="age" component="input" type="number"/>
          </div>
        </form> 
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
};
// form: name debe de ser unico en toda la aplicacion no se puede duplicar
export default reduxForm({form: 'CustomerEdit'})(CustomerEdit);

