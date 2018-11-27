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

export default class WikiResults extends React.Component {
	mapResults = () => {
    const wikiUrl = 'https://en.wikipedia.org/wiki/';
		const heading = (<div><h4>Wikipedia Results ({this.props.results.length})</h4></div>);
		const resultdisplay = this.props.results.map((result, index) => {
			let comp = null; 
       /*eslint-disable */
       if (result.title) {
        comp = (<div className="resCard wikiResults" key={index}>
          {result.snippet ? <div className="desc" dangerouslySetInnerHTML={{ __html: result.snippet }} /> : ''}
           <a className="wikiLink" href={`${wikiUrl}${result.title}`} target="_blank">Wikipedia</a>
        </div>)
       }
  		return comp;
  	});
    return (<div className="wiki resContainer">{heading}{resultdisplay}</div>);
  };

	render(){
		return(<div>{this.mapResults()}</div>)
	}
}

WikiResults.propTypes = {
  results: PropTypes.array,
};