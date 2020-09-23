import React from 'react';
import {Provider} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Front from './components/Front';
import Movie from './components/Movie';
import store from './store';
function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Navbar/>
        <Route exact path="/" component={Front} />
        <Route exact path="/movie/:id" component={Movie} />
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
