import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Entrar from './Components/auth/Entrar';
import Registo from './Components/auth/Registo';
import HeroDetails from './Components/HeroDetails';

class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
          <div className="App">
              <NavBar/>
              <Switch>
                  <Route exact path='/' component={Dashboard}/>
                  <Route path='/entrar' component={Entrar}/>
                  <Route path='/registar' component={Registo}/>
                  <Route path={"/hero/:id"} component={HeroDetails}/>
              </Switch>
          </div>
          </BrowserRouter>
      );
  }
}

export default App;
