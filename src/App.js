import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Divider from './Divider';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Divider/>
      <Portfolio/>
      <Divider/>
      <Contact/>
    </div>
  );
}

export default App;
