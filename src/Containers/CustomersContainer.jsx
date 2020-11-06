import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from '../Components/AppFrame';
import CustomerList from '../Components/CustomerList';
import CustomerActions from '../Components/CustomerActions';
import {withRouter} from 'react-router-dom';
import {fetchCustomers} from './../acions/fetchCustomers';
import { getCustomers } from './../Selector/customers';



class CustomersContainer extends Component {
  
  componentDidMount(){
  this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = customers  => (
    <div>
      <CustomerList 
        customers = { customers }
        urlpath={ 'customer/' }
        />
      <CustomerActions>
        <button onClick={this.handleAddNew} >
          Nuevo cliente
        </button>
      </CustomerActions>
    </div>
);
  render() {
    return (
      <div>
        <AppFrame 
          header="Listado de clientes"
          body={this.renderBody(this.props.customers)}
        />
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers:PropTypes.array.isRequired,

};
CustomersContainer.defaultProps = {
  customers: []
};
const mapStateToProps = state => (
  {
    customers: getCustomers(state)
  }
);
export default withRouter( connect(mapStateToProps, { fetchCustomers }) (CustomersContainer));
