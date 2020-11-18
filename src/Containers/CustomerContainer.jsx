import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import {getCustomersByDni} from '../Selector/customers';
import {Route} from 'react-router-dom';
import CustomerEdit from './../Components/CustomerEdit'
import CustomerData from '../Components/CustomerData';

class CustomerContainer extends Component {
//<p> Datos del cliente " {this.props.customers.name}"</p>
  renderBody = () => (
    <Route path="/customers/:dni/edit" children ={
      ( {match}  ) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
           return <CustomerControl {...this.props.customer}/> 
    }
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

  customer: getCustomersByDni(state,props) 
  }
);
export default connect(mapStateToProps, null)(CustomerContainer); 
