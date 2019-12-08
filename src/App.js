import React, { Component } from 'react';
import NavbarComp from './1.pages/Navbar/NavbarComp';
import { Switch, Route } from 'react-router-dom';
import Home from './1.pages/Home/Home';
import Daftar from './1.pages/Daftar/Daftar';

class App extends Component {

  render() {
    return (
      <div>
          <NavbarComp/>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/daftar' component={Daftar} exact/>
          </Switch>
      </div>
    );
  }
}

export default App;