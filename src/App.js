import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={ListContacts} />
          <Route path='/create' component={CreateContact} />
        </div>
      </Router>
    );
  }
}

export default App;
