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

export default class PageResult extends React.Component {
	/*getReducedData = (data) => {
	    return data.reduce((accumulator) => {
	        return `${accumulator}`
	    }, '');
	}*/

	render() {
		let { item, index } = this.props;
		  let comp = null; 
       /*eslint-disable */
      if (item && (item.highlight && item.highlight.pageTitle && item.highlight.pageTitle.length)) {
        comp = (<div className="resCard moreRes" key={index}>
          <div
          className="title"
          dangerouslySetInnerHTML={{ __html: item.highlight.pageTitle.reduce((accumulator, title) => {
        return `${accumulator} ${title}`
      }, '') }}
          onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
        /><span className="spanElasticScore">({item._score})</span>
        {(item.highlight && item.highlight.content && item.highlight.content.length)? <div className="desc" dangerouslySetInnerHTML={{ __html: item.highlight.content.reduce((accumulator, title) => {
        return `${accumulator} ${title}`
      }, '') }} /> : ''}
      </div>)
      }  else if (item && item._source && item._source.pageTitle) {
        comp = (<div className="resCard moreRes" key={index}><div
          className="title"
          dangerouslySetInnerHTML={{ __html: item._source.pageTitle }}
          onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
        /><span className="spanElasticScore">({item._score})</span>
        {(item.highlight && item.highlight.content && item.highlight.content.length)? <div className="desc" dangerouslySetInnerHTML={{ __html: item.highlight.content.reduce((accumulator, title) => {
        return `${accumulator} ${title}`
      }, '') }} /> : ''}
      </div>)
  		} else if (item.highlight && item.highlight.content && item.highlight.content.length) {
        comp =  (<div className="desc" dangerouslySetInnerHTML={{ __html: item.highlight.content.reduce((accumulator, title) => {return `${accumulator} ${title}`}, '') }} />)
     
      }
     
     
  		return comp;

	}
	 
}