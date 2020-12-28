import { createAction } from 'redux-actions';
import { UPDATE_CUSTOMERS } from '../constants';
import { apiPut } from '../api'
import { urlCustomers } from '../api/url';

export const updateCustomers = createAction(UPDATE_CUSTOMERS, 
  (id,customer) => apiPut(urlCustomers, id, customer)());
