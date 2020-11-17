import { createAction } from 'redux-actions';
import {apiGet} from '../api';
import {urlCustomers} from '../api/url';
import { FETCH_CUSTOMERS } from './../constants';
 
export const fetchCustomers = createAction( FETCH_CUSTOMERS, apiGet(urlCustomers)); 
