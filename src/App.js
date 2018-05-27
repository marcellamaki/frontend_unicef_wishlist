import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import { Route } from 'react-router-dom';
import Landing from './containers/Landing.js';
import Dashboard from './containers/BuyerDashboard.js';
import LogIn from './components/LogIn.js';


class App extends Component {

  handleLogIn () {
    console.log("handling login")
  }

  handleBrowse () {
    console.log("handling browse")
  }

  render() {
    return (
      <div className="container">
        <Route path='/'  render={() => <NavBar />}/>
        <Route exact path='/' render={() => <Landing />} />
        <Route path='/browse' render={() => <Dashboard />} />
        <Route path='/login' render={() => <LogIn />} />
      </div>
    );
  }
}

export default App;
