import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import NavBar from './component/NavBar';
import Footerbar from './component/Footerbar';
import Landing from './component/home/landing';
import store from './store'
import Movie from './component/home/Movie';

function App() {
  return (
    // <div className="App">
      <Provider store={store}>
      <Router>
        <div>
      <NavBar/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/movie/:id" component={Movie}/>
      <Footerbar/>
      </div>
      </Router>
      </Provider>
    // </div>
  );
}

export default App;
