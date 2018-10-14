/**
PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
*  Copyright © 2017 Pearson Education, Inc.
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Pearson Education, Inc.  The intellectual and technical concepts contained
* herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
* patent applications, and are protected by trade secret or copyright law.
* Dissemination of this information, reproduction of this material, and copying or distribution of this software
* is strictly forbidden unless prior written permission is obtained
* from Pearson Education, Inc.
**/

/**
* The component for search related screens.
*
* @author Hema Nandagopal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Utilities from './Utils/Utilities'
import SearchIcon from './SearchIcon';
import CloseIcon from './CloseIcon';
import './Search.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  cssFocused: {},
  bootstrapRoot: {
    padding: 0,
    width: '100%',
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 3,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #c7c7c7',
    fontSize: 14,
    padding: '6px 13px 7px'
  },
  bootstrapFormLabel: {
    fontSize: 12,
    transform: 'none',
    color: '#6a7070',
    lineHeight: 1.33,
    '&$cssFocused': {
      color: '#6a7070'
    }
  },
  searchClear: {
    marginLeft: '-48px',
    marginTop: 0,
    verticalAlign: 'baseline'
  }
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchResults = {};
    this.requestProcessing = false;
    this.counter = null;
    this.timeDelay = 300;
    this.state = {
      isOpen: false,
      searchText: '',
      showResults: false
    };
  }

  clearInput = () => {
    this.searchResults = {};
    this.setState({ searchText: '', showResults: false });
  }

  onSearchClick = () => {
    this.clearInput();
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  }

  handleSearch = (event) => {
    const value = event.target.value;
    this.setState({ searchText: value });
    if (value === '') {
      this.clearInput();
    } else {
      if (!this.requestProcessing) {
        this.requestProcessing = true;
        this.getAPIResults(value);
      }
      // The next API request will trigger after 300ms
      setTimeout(() => {
        this.getAPIResults(value);
      }, this.timeDelay);
      
    }
  }

  renderNoResult = searchTextVal => (<div className="searchNoResults">{`Sorry, we couldn’t find any matches for ${searchTextVal}`}</div>);

  getAPIResults = (value) => {
    Utilities.getSearchResults(value).then((data) => {
      this.searchResults = Utilities.map(data);
    if (this.searchResults.chapter.length || this.searchResults.figure.length || this.searchResults.glossary.length) {
      this.setState({ showResults: true });
    } else {
      this.setState({ showResults: false });
    }
    this.requestProcessing = false;
    });
  }

  renderAPIData = (results) => {
    this.searchResults = Utilities.map(results);
    if (this.searchResults.chapter.length || this.searchResults.figure.length || this.searchResults.glossary.length) {
      this.setState({ showResults: true });
    } else {
      this.setState({ showResults: false });
    }
    this.requestProcessing = false;

  }

  renderSearchResult = (type) => {
    if (type === 'primary') {
      const resultArray = [];
      for (let prop in this.searchResults) {
        if ((prop === 'chapter' || prop == 'figure') && this.searchResults[prop].length) {
          const numRes = this.searchResults[prop].length;
          const heading = (<div><h5>{prop} - {`(${this.searchResults[prop].length} result${numRes > 1 ? 's' : ''})`}</h5></div>);
           const moreResults = this.searchResults[prop].map((result, index) => {
            let comp = null; 
             /*eslint-disable */
            if (result && result.highlight && result.highlight.chapterTitle && result.highlight.chapterTitle[0]) {
              comp = (<div className="resCard">
                <div
                key={index}
                dangerouslySetInnerHTML={{ __html: result.highlight.chapterTitle[0] }}
                onClick={() => this.props.onSearchResultClick(result.id, 'moreRes', result._source.pageUrn)} 
              />
              {prop === 'figure' ? <div className="figTitle">{result._source.title}</div> : ''}
              </div>);
            } else if (result && result.highlight && result.highlight.label && result.highlight.label[0]) {
              comp = (<div className="resCard"><div
                key={index}
                dangerouslySetInnerHTML={{ __html: result.highlight.label[0] }}
                onClick={() => this.props.onSearchResultClick(result.id, 'moreRes', result._source.pageUrn)} 
              />
              {prop === 'figure' ? <div className="figTitle">{result._source.title}</div> : ''}
              </div>);
            } else if (result && result._source && result._source.chapterTitle) {
              comp = (<div className="resCard"><div
                key={index}
                dangerouslySetInnerHTML={{ __html: result._source.chapterTitle }}
                onClick={() => this.props.onSearchResultClick(result.id, 'moreRes', result._source.pageUrn)} 
              />
              {prop === 'figure' ? <div className="figTitle">{result._source.title}</div> : ''}
              </div>);
            } else if (result && result._source && result._source.label) {
              comp = (<div className="resCard"><div
                key={index}
                dangerouslySetInnerHTML={{ __html: result._source.label }}
                onClick={() => this.props.onSearchResultClick(result.id, 'moreRes', result._source.pageUrn)} 
              />
              {prop === 'figure' ? <div className="figTitle">{result._source.title}</div> : ''}
              </div>);
            }
            /* eslint-enable */
            return comp;
          });
          resultArray.push(<div>{heading}{moreResults}</div>);
        }
      }
      return (<div><div className="took">Search took about {this.searchResults.took} ms. Total hits: {this.searchResults.total}</div>{resultArray}</div>);
    } else if (type ==='secondary') {
      for (let prop in this.searchResults) {
        const numRes = this.searchResults[prop].length;
        if (prop === 'glossary') {
          const data = this.searchResults[prop];
          if (data.length > 0) {
            const heading = (<div><h5>{prop} - {`(${this.searchResults[prop].length} result${numRes > 1 ? 's' : ''})`}</h5></div>);
            const glossaryResults = data.map((result, index) => {
              let comp = null;
              if (result && result.highlight && result.highlight.term && result.highlight.term[0]) {
                /*eslint-disable */
                if (result._source.definition) { 
                  comp = (<div><div className="searchGlossaryterm" dangerouslySetInnerHTML={{ __html: (result.highlight.term[0]) }} />
                    <div
                      key={index}
                      className="searchGlossaryDef"
                      dangerouslySetInnerHTML={{ __html: result['_source'].definition }} 
                      onClick={() => this.props.onSearchResultClick(result.id, 'glossary', result._source.pageUrn)}
                    />
                  </div>);/*eslint-disable */
                }
              } else if (result && result._source.term && result._source.definition) { /*eslint-disable */
                comp = (<div><div className="searchGlossaryterm"  dangerouslySetInnerHTML={{ __html: (result['_source'].term) }} /> 
                  <div
                    key={index}
                    className="searchGlossaryDef"
                    dangerouslySetInnerHTML={{ __html: result._source.definition }} 
                    onClick={() => this.props.onSearchResultClick(result.id, 'glossary', result._source.pageUrn)}
                  />
                  </div>);/*eslint-disable */
              }
              return comp;
            });
          return (<div>{heading}{glossaryResults}</div>);
          }
          return this.renderEmptyStateMsg('secondary'); 
        }
      } 
    }
  }


  renderEmptyStateMsg = (initiator) => {
    const primary = initiator === 'primary';
    return (
      <div className={`emptyContainer ${ primary ? 'primaryEmpty' : 'secondaryEmpty' }`}>
        <div className="flex">
          <div className="empty-bar1" />
          <div className="empty-bar2" />
        </div>
        {primary && 
        <div className="emptyMsg">Search page numbers, chapters, figures, learning objectives, terms.</div>}
      </div>
    );
  }

  clearInput = () => {
    this.searchResults = {};
    this.setState({ searchText: '', showResults: false });
  }

  handleClickAway = () => {
    this.setState({
      isOpen: false
    });
  };

  onClose = () => {
    console.log("onClose call back");
    this.setState({
      isOpen: false
    });
  }

   renderInput = () => {
    const { classes } = this.props;
    this.searchContainer = null;
    const placeHolderText = 'Search Content';
    const iconStyle = {
      width: 14,
      height: 14
    };
    return (
      <div
        ref={(input) => {
          this.searchContainer = input;
        }
        }
      >
        <div className="SearchinputBar">
          <TextField
            placeholder={placeHolderText}
            id="bootstrap-input"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput
              },
              endAdornment: <InputAdornment position="end" classes={{ root: classes.searchClear }} className={`clearText ${this.state.searchText !== '' ? 'showIcon' : 'hideIcon'}`}>
                <CloseIcon iconStyle={iconStyle} fontSize={14} fill="#6a7070" className="clearIcon" clearClick={this.clearInput} ariaLabel="Clear search text content" />
              </InputAdornment>
            }}
            fullWidth
            onChange={this.handleSearch}
            maxLength="255"
            value={this.state.searchText}
            autoFocus
          />

        </div>
      </div>
    );
  }


  renderSearchBlock = (searchTextVal) => {
     const tempStyle = {
      width: 'auto',
      height: '100%',
      textAlign: 'center',
      borderLeft: '1px solid #dedede',
      borderRight: '1px solid #dedede'
    };
    return (<ClickAwayListener onClickAway={this.handleClickAway}><Modal open={this.state.isOpen} contentLabel="Search" onClose={this.onClose}>
      <div className="outer">
        <div className="searchPanelContainer" style={{ tempStyle }}>
          <div className="primaryWrap">
            <Paper className="searchPanel primary" elevation={0}>
               {this.renderInput()}
              <div className={`searchResultContainer  ${this.state.showResults ? 'responseContainer' : 'msgContainer'}`}>
                {this.state.searchText === '' && this.renderEmptyStateMsg('primary')}
                {this.state.searchText !== '' && this.state.showResults && this.renderSearchResult('primary')}
                {this.state.searchText !== '' && !this.state.showResults && !this.requestProcessing && this.renderNoResult(searchTextVal)}
              </div>
            </Paper>
          </div>
          <div className="secondaryWrap">
            <Paper className="searchPanel secondary" elevation={0}>
              <div className={`searchResultContainer ${this.state.showResults ? 'responseContainer' : 'msgContainer'}`}>
                {this.state.searchText === '' && this.renderEmptyStateMsg()}
                {this.state.searchText !== '' && this.state.showResults && this.renderSearchResult('secondary')}
                {this.state.searchText !== '' && !this.state.showResults && this.renderEmptyStateMsg()}
              </div>
            </Paper>
          </div>
        </div>
        <div className="closeBtnContainer">
          <span className="esc">Hit <span className="escSpan">ESC</span> to close</span>
          <div className="closeBtn">
            <CloseIcon onClick={this.onClose} aria-label="Close" />
          </div>
        </div>
      </div>
    </Modal>
    </ClickAwayListener>);
  }

  render() {
    const searchTextVal = `"${this.state.searchText}"`;
    const searchStyle = {
      width: 34,
      height: 34,
      backgroundColor: this.state.isOpen ? '#e9f3f6' : ''
    };
    return (
      <div className="searchContainer">
        <span>
          <SearchIcon
            searchClick={this.onSearchClick}
            className="searchIconBtn"
            ariaLabel="Search"
            iconStyle={searchStyle}
            seachMode={this.state.isOpen}
          />
          {this.state.isOpen && this.renderSearchBlock(searchTextVal)}
        </span>
      </div>
    );
  }
}

Search.propTypes = {
  onSearchResultClick: PropTypes.func,
};

export default withStyles(styles)(Search);
