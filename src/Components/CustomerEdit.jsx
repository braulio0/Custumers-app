import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsisInitial} from './../helpers/setPropsAsisInitial';

const isRequired = value => (
    !value && "Este campo es requerido"
);

const Myfield = ( { input, meta } ) => (
  <div> 
    <input { ...input } type="text"/>
    { meta.error && <span> {meta.error}</span> }
  </div>
);

const CustomerEdit = ({ name, dni, age }) => {
  return(
    <div>
      <h2> Edición del cliente</h2>
        <form action="">
          <div>
            <label htmlFor="name">Nombre: </label> 
              <Field name="name" component={Myfield} type="text" validate= {isRequired}/>
          </div>
          <div>
            <label htmlFor="dni">DNI: </label> 
              <Field name="dni" component={Myfield} type="text" validate={isRequired}/>
          </div>
          <div>
            <label htmlFor="age">Edad: </label> 
              <Field name="age" component={Myfield} type="number"/>
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

const CustomerEditForm =  reduxForm({form: 'CustomerEdit'})(CustomerEdit);
// form: name debe de ser unico en toda la aplicacion no se puede duplicar
export default setPropsAsisInitial(CustomerEditForm);
