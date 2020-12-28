import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import {getCustomersByDni} from '../Selector/customers';
import {Route, withRouter} from 'react-router-dom';
import CustomerEdit from './../Components/CustomerEdit'
import CustomerData from '../Components/CustomerData';
import { fetchCustomers } from './../acions/fetchCustomers' 
import { updateCustomers } from './../acions/updateCustomers' 

class CustomerContainer extends Component {

  componentDidMount(){
    if (!this.props.customers){
      this.props.fetchCustomers();
    }
  }


  handleSubmit = values => {
    console.log(JSON.stringify(values));
    const { id  } = values;
    this.props.updateCustomers(id, values);
  }

  handleOnBack = () =>{

    this.props.history.goBack();

  }

//<p> Datos del cliente " {this.props.customers.name}"</p>
  renderBody = () => (
    <Route path="/customers/:dni/edit" children ={
      ( {match}  ) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
           return <CustomerControl  
                    {...this.props.customer} 
                    onSubmit={this.handleSubmit}
                    onBack={this.handleOnBack}/> 
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
  customers: PropTypes.object,
  fetchCustomers: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) => ({

  customer: getCustomersByDni(state,props) 
  }
);
export default withRouter(connect(mapStateToProps, {
  fetchCustomers,
  updateCustomers

})(CustomerContainer)); 
