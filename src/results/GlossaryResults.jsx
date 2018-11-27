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

export default class GlossaryResults extends React.Component {

	mapResults = () => {
		const numRes = this.props.results.length;
		const heading = (<div><h4>Glossary Results <span className="NumResults">({numRes})</span>
        </h4></div>);
		const resultdisplay = this.props.results.map((result, index) => {
			let comp = null; 
       /*eslint-disable */
      if (result && result.highlight && result.highlight.term && result.highlight.term[0]) {
        /*eslint-disable */
        if (result._source.definition) { 
          comp = (<div key={index}><div className="searchGlossaryterm" dangerouslySetInnerHTML={{ __html: (result.highlight.term[0]) }} /><span className="spanElasticScore">({result._score})</span>
            <div
              className="searchGlossaryDef"
              dangerouslySetInnerHTML={{ __html: result['_source'].definition }} 
              onClick={() => this.props.onSearchResultClick(result.id, 'glossary', result._source.pageUrn)}
            />
          </div>);
        }
        } else if (result && result._source.term && result._source.definition) { /*eslint-disable */
          comp = (<div key={index}><div className="searchGlossaryterm"  dangerouslySetInnerHTML={{ __html: (result['_source'].term) }} /> <span className="spanElasticScore">({result._score})</span>
            <div
              className="searchGlossaryDef"
              dangerouslySetInnerHTML={{ __html: result._source.definition }} 
              onClick={() => this.props.onSearchResultClick(result.id, 'glossary', result._source.pageUrn)}
            />
            </div>);/*eslint-disable */
        }
        return comp;
      });
		  return (<div className="glossary resContainer">{heading}{resultdisplay}</div>);
    }

  	render(){
  		return(<div>{this.mapResults()}</div>)
  	}
  }

GlossaryResults.propTypes = {
  results: PropTypes.array,
};