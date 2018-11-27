import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { EventProvider } from '@pearson-incubator/aquila-js-core';
import pearsonTheme from './Theme/pearsonLightTheme';
// import logo from './logo.svg';
import Header from './Header';
import Search from './Search';
import {searchData, searchAPI} from './data/searchData';
import './Search.scss';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchIndex: searchData[0],
      searchAPI: searchAPI.elasticAPI,
      checked: 0
    };
  }

  handleToggleSwitch = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  getTheme = () => (
    createMuiTheme({
      palette: {
        type: 'light',
        secondary: {
          main: '#FFF'
        }
      },
      typography: {
        useNextVariants: true
      },
      ...pearsonTheme
    })
  )

  handleSearchClick = () => {
    return false; 
  }

  searchIndexChanged = (val) => {
    const index = searchData.find(obj => obj.name === val);
    this.setState({
      searchIndex: index
    })
  };

  render() {
    console.log('pearsonTheme=', pearsonTheme);
    return (
      <EventProvider product="Cite">
        <MuiThemeProvider theme={this.getTheme}>
          <div className="App">
            <Header 
              data={searchData} 
              cbk={this.searchIndexChanged} 
              searchIndex={this.state.searchIndex} 
              apiChange={this.handleToggleSwitch}
              checked={!!this.state.checked}
            />
            <div className="App-intro">
              <div className="search-container">
                <Search 
                onSearchResultClick={this.handleSearchClick} 
                searchIndex={this.state.searchIndex} 
                />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </EventProvider>
    );
  }
}

export default App;
