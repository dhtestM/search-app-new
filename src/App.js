import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Search from './Search';
import './Search.scss';
import './App.scss';

class App extends Component {
  handleSearchClick = () => {
    return false; 
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <div className="search-container">
            <Search onSearchResultClick={this.handleSearchClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
