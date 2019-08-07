import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer'
import Main from './components/common/Main'
import SearchBar from './components/common/SearchBar'
import styled from 'styled-components';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">     
        <Nav />
        <Main />
        <Footer />   
    </div>
  );
}

export default App;


