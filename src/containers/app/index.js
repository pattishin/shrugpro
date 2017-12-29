import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import GridComponent from '../../components/GridComponent';
import c from './content.json';
import s from './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <AppBar title={c.title} />
            <div className={s.app}>
                <GridComponent />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
