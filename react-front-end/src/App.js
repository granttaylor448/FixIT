import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import RouterPage from './RouterPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/AlertState'

function App() {
  
  const [loading, setLoading] = useState(false)
   
    return (
      <AlertState>
        <Router>
          <div className="App" >
            <CssBaseline />
            {/* <Header removeSession={this.removeSession} name={this.state.name} /> */}
            < Header />       
            {/* < RouterPage /> */}            
            <Switch>
                {/* Using the `component` prop */}
                <Route exact path="/" >
                  < MainPage />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
              </Switch>  
            < Footer /> 
          </div>
        </Router>
      </AlertState>
    );
  
}

export default App;


    