import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
