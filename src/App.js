import React, { Component } from 'react';
import './App.css';

import MusicPage from './music-page/MusicPage';
import ArtPage from './art-page/ArtPage';
import ActingPage from './acting-page/ActingPage';
import Footer from './footer/footer';
import MobileNavMenu from './mobile-nav-menu/mobileNavMenu';

import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <MobileNavMenu/>
        <Switch>
          <Route exact path='/' component={MusicPage}/>
          <Route path='/art' component={ArtPage}/>
          <Route path='/acting' component={ActingPage}/>
        </Switch>
        <Footer style={{zIndex: 10000}}></Footer>
      </div>
    );
  }
}

export default App;