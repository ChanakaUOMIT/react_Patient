import React, { Component } from 'react';
import AppNavbar from './components/layout/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './components/layout/Dashboard';
//import Admin from './components/admins/Admin';
import AdminDashboard from './components/layout/AdminDashboard';
import DoctorDashboard from './components/layout/DoctorDashboard';
import NurseDashboard from './components/layout/NurseDashboard';
import AdminDetails from './components/admins/AdminDetails';
import DoctorDetails from './components/doctors/DoctorDetails';
import NurseDetails from './components/nurses/NurseDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
        <AppNavbar />
        <div className="container">
          <Switch>
              <Route 
                exact 
                path="/" 
                component={Dashboard } 
              />

              <Route 
                exact 
                path="/admins" 
                component={AdminDashboard } 
              />

              <Route 
                exact 
                path="/doctors" 
                component={DoctorDashboard } 
              />

              <Route 
                exact 
                path="/nurses" 
                component={NurseDashboard } 
              />

              <Route 
                exact 
                path="/admin/:id" 
                component={AdminDetails } 
              />

              <Route 
                exact 
                path="/doctor/:id" 
                component={DoctorDetails } 
              />

              <Route 
                exact 
                path="/nurse/:id" 
                component={NurseDetails } 
              />
          </Switch>
        </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
