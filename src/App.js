/*Hon Pan Kwok 808481863*/
import logo from './logo.svg';
import {Header, Home, CreateNote, Routes} from './page'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
 
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes />
      
    </div>
    </Router>
    
  );
}

export default App;
