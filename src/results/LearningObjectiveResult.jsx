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

export default class LearningObjectiveResult extends React.Component {

	render() {
		let { item, index } = this.props;
		let comp = null; 
       /*eslint-disable */
      if (item && (item.highlight && item.highlight.authoredText && item.highlight.authoredText.length)) {
        comp = (<div className="resCard loRes" key={index}>
          <div
          className="title"
          dangerouslySetInnerHTML={{ __html: item.highlight.authoredText.reduce((accumulator, title) => {
        return `${accumulator} ${title}`
      }, '') }}
          onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
        /><span className="spanElasticScore">({item._score})</span>
        {item._source.path ? <img src={item._source.path} className="imgThumb" /> : ''}
        </div>);
      }  else if (item && item._source && item._source.authoredText) {
        comp = (<div className="resCard" key={index}><div
          className="title"
          dangerouslySetInnerHTML={{ __html: item._source.authoredText }}
          onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
        /><span className="spanElasticScore">({item._score})</span>
        {item._source.title ? <div className="desc">{item._source.title}</div> : ''}
        {item._source.path ? <img src={item._source.path} className="imgThumb" /> : ''}
        </div>);
      }
      return comp;
	}
	 
}