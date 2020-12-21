import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsisInitial} from './../helpers/setPropsAsisInitial';
import CustomerActions from './CustomerActions'

const validate = values => {
      const error = {}; //objeto de errores
  if (!values.name){
      error.name = "El nombre es requerido";
  }
  if ((isNaN(Number(values.dni)))){
    error.dni = "El DNI debe ser Numerico"

  }
  if (!values.dni){
    error.dni = "El DNI es requerido"
  }

  return error;
};

const isNumber = value => (

    isNaN(Number(value)) && "Este campo dede ser numerico"

);

const Myfield = ( { input, meta, type } ) => (
  <div> 
    <input { ...input } type={type}/>
    { meta.touched && meta.error && <span> {meta.error}</span> }
  </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack}) => {
  return(
    <div>
      <h2> Edición del cliente</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre: </label> 
              <Field name="name" component={Myfield} type="text" />
          </div>
          <div>
            <label htmlFor="dni">DNI: </label> 
              <Field name="dni" component={Myfield} type="text" />
          </div>
          <div>
            <label htmlFor="age">Edad: </label> 
              <Field name="age" component={Myfield} type="number" validate={isNumber}/>
          </div> 
          <CustomerActions>
            <button type="submit" disabled={submitting}> Aceptar </button>
            <button onClick={onBack}>Cancelar</button>
          </CustomerActions>
        </form> 
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
};

const CustomerEditForm =  reduxForm(
  {
    form: 'CustomerEdit',
    validate

  }
)(CustomerEdit);
// form: name debe de ser unico en toda la aplicacion no se puede duplicar
export default setPropsAsisInitial(CustomerEditForm);
