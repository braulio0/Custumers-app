import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from './../constants';
 
const customers = [
  { "dni": "27000000",
    "name": "Juan Perez",
    "age": 37
  },
  { "dni": "28000000",
    "name": "Ruben Perez",
    "age": 17
  },
  { "dni": "29000000",
    "name": "Raul Perez",
    "age": 27
  }
];

export const fetchCustomers = createAction( FETCH_CUSTOMERS, () => customers ); 
