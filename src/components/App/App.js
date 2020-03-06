import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";


class App extends Component {

  render() {
    return (
      
      <Router>
      <div>
        <h1>Giphy Search!</h1>
        <ul>
          <li><Link to="/">Search!</Link></li>
          <li><Link to="/favorites">Favorites!</Link></li>
          
        </ul>
        <Route exact path='/' component={Search} />
        <Route path='/favorites' component={Favorites} />
      </div>
     </Router>

    );
  }
  
}

export default App;
