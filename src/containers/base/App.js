import React, { Component } from 'react';
import logo from '../../logo.svg';
import s from './App.css';

class App extends Component {
  render() {
    console.log(s);
    return (
      <div className={s.App}>
        <header className={s.appHeader}>
          <img src={logo} className={s.appLogo} alt="logo" />
          <h1 className={s.appTitle}>Welcome to React</h1>
        </header>
        <p className={s.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
