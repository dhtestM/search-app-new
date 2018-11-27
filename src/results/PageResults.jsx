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
* @author Dhanya Menon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ShowMoreResults from './ShowMoreResults';
import PageResult from './PageResult';

export default class PageResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    }
  }
  componentWillMount() {
    this.setState({ results: this.props.results });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.results });
    // this.forceUpdate();
    //  console.log("componentWillReceiveProps figure")
  }
  render() {
      return(
       <div>
        <div className="Header">
          <h4>More Results <span className="NumResults">({this.state.results.length})</span>
            </h4>
        </div> 

        <ShowMoreResults array={this.state.results} resultsShown={0}>
        {(array) => (
           array.map((item, i) => (
              <PageResult item={item} index={i} searchIndex={this.props.searchIndex} /> 
           )
        ))}
      </ShowMoreResults>
    </div>
      )
  }
}
PageResults.propTypes = {
  results: PropTypes.array,
};