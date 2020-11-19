import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Work from './components/work'
import WhatIWant from './components/whatiwant'
import Hobbies from './components/hobbies'

class App extends Component {
  render() {
    return (
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
            <div id="colorlib-main">
                <About></About>
                <Work></Work>
                <WhatIWant></WhatIWant>
                <Hobbies></Hobbies>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
