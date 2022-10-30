import logo from './logo.svg';
import './App.css';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router ,Route} from 'v5/cjs/react-router-dom';
import {Redirect} from 'v5/cjs/react-router-dom'
import { Switch } from 'v5/cjs/react-router-dom.min';
import Customers from './Component/Customers';
// import Operations from './Increment';




class App extends React.Component {
  

  render()
  { 
    return (
     <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Simple React App</h1>
        </header>
        <Switch>
          
          <Route  path ="/" component={Customers}/>

        </Switch>
      </div>
     </Router>
  )
  }
}

export default App;
