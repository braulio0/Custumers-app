import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
class App extends Component{
  renderHome = () => <h1> home</h1>;
  renderCustomersContainer = () => <h1>Customers container</h1>;
  renderCustomersListContainer = () => <h1> Customers list container</h1>;
  renderCustomersNewContainer = () => <h1> Customers new container</h1>;
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/customers" component={this.renderCustomersListContainer}/>
          <Route exact path="/customers/:dni" component={this.renderCustomersContainer}/>
          <Route exact path="/customers/new" component={this.renderCustomersNewContainer}/>
        
        </div>
      </Router>
    );
  }

}
export default App;
