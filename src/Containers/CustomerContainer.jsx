import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import {getCustomersByDni} from '../Selector/customers';
import {Route} from 'react-router-dom';

class CustomerContainer extends Component {
//<p> Datos del cliente " {this.props.customers.name}"</p>
  renderBody = () => (
    <Route path="/customers/:dni/edit" children ={

      ( {match}  ) => ( match ? <p> Es edicion </p> : <p> No es edicion</p> )
      }/>
  )

  render() {
    return (
      <div>
        <AppFrame 
          header ={ `Cliente ${this.props.dni}` }
          body ={this.renderBody()}
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customers: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({

  customers: getCustomersByDni(state,props) 
  }
);
export default connect(mapStateToProps, null)(CustomerContainer); 
