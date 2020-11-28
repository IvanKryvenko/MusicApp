import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from './components/navigation.component';
import Search from './components/musicSearching.component';
import Home from './components/homepage.component';
import ArtistDetail from './components/artistDetail.component';
import { connect } from 'react-redux';

function App(props) {
  return (
    <Router>
      <div className="main-container">
        <Nav />
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/:id" component={ArtistDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect()(App);
