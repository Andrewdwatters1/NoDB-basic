import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Logo from './components/Logo';
import Albums from './components/Albums';
import AddAlbum from './components/AddAlbum';


class App extends Component {
  
  
  // methodEx() {
  //   axios.get('/api/albums')
  // }
  render() {
    return (
      <div className="center-main">
        <div className="App">
        <Title/>
       </div>

        <div className="logo-container">
         <Logo/>
         <Logo/>
         <Logo/>
         <Logo/>
         <Logo/>
         <Logo/>
         <Logo/>
        </div>

        <div className="center-albs">
          <Albums />
          <AddAlbum/>
        </div>

        <div className="App">
          <Title/>
        </div>
      </div>
    );
  }
}

export default App;
