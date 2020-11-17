import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CustomerContainer from './Containers/CustomerContainer';
import CustomersContainer from './Containers/CustomersContainer';
import HomeContainer from './Containers/HomeContainer';


class App extends Component{
  renderCustomersListContainer = () => <h1> Customers list container</h1>;
  renderCustomersNewContainer = () => <h1> Customers new container</h1>;
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={ CustomersContainer }/>
          <Switch>
           <Route  path="/customers/new" component={this.renderCustomersNewContainer}/>
            <Route  path="/customers/:dni" render={props => <CustomerContainer dni= { props.match.params.dni }/>}/>
          </Switch>
                
        </div>
      </Router>
    );
  }

}
export default App;
