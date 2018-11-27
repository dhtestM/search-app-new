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

export default class FigureResults extends React.Component {
	mapResults = () => {
    const youTubeUrl = 'https://youtube.com/watch?v='
		const heading = (<div><h4>Youtube Results ({this.props.results.length})</h4></div>);
		const resultdisplay = this.props.results.map((result, index) => {
			let comp = null; 
       /*eslint-disable */
      if (result.snippet && result.snippet.title) {
        comp = (<div className="resCard youtubeResults" key={index}>
        <div className="youtubeImg">
          <a href={`${youTubeUrl}${result.id.videoId}`} target="_blank">
            <span className="imageWrap">
            <img src={result.snippet.thumbnails.default.url} />
            <img src="https://png.icons8.com/color/2x/youtube-play.png" className="playIcon" />
            </span>

          </a>
          </div>
          <div className="youtubeText">
          <span className="title">{result.snippet.title}</span>
          <div className="desc" dangerouslySetInnerHTML={{ __html: result.snippet.channelTitle}} />
          </div>


          </div>)
      }
  		return comp;
  	});
    return (<div className="youtube resContainer">{heading}{resultdisplay}</div>);
  };

	render(){
		return(<div>{this.mapResults()}</div>)
	}
}

FigureResults.propTypes = {
  results: PropTypes.array,
};