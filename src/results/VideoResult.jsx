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
import { VideoPlayerPreviewComponent } from '@pearson-incubator/aquila-js-media';

export default class VideoResult extends React.Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.videoContainer.getElementsByClassName('play-replay-icon')[0].style.position="absolute";
	}
	getVideoWidget = (item) => {
		const data = {};
		data.type="video";
	    const props = {};
	    data.displayPreview = true;
		const videoData = {};
		videoData.thumbnail = {};
		videoData.id = item.id;
		videoData.thumbnail.src = item._source.path;
		const startTime = item._source.startTime || null;
		if (startTime) {
		videoData.startTime = Number(startTime);
		}
		const endTime = item._source.endTime || null;
		if (endTime) {
		videoData.endTime = Number(endTime);
		}
		videoData.dataDuration = item._source.dataDuration;
		videoData.src = item._source.srcPath;
		videoData.displayTitle = item._source.title;
		videoData.title = item._source.label;
		videoData.caption = item._source.caption || '';
		videoData.action = '';
		videoData.alt = item._source.caption || '';
		data.data = videoData;
	    // data.props = props;
    	return (<VideoPlayerPreviewComponent {...data} />)
	}
	render() {
		let { item, index } = this.props;
		let comp = null; 
         /*eslint-disable */

        if (item && (item.highlight && item.highlight.chapterTitle && item.highlight.chapterTitle.length)) {
			comp = (<div className="resCard videoRes" key={index}>
			<div
			    className="title"
			    dangerouslySetInnerHTML={{ __html: item.highlight.chapterTitle[0] }}
			    onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
				/><span className="spanElasticScore">({item._score})</span>
			</div>);
        } else if (item && item._source && item._source.label) {
			comp = (<div className="resCard videoRes" key={index} ref={(div) => { this.videoContainer = div; }} ><div
			  className="title"
			  dangerouslySetInnerHTML={{ __html: item._source.label }}
			  onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
			/><span className="spanElasticScore">({item._score})</span>
			{item._source.title ? <div className="desc">{item._source.title}</div> : ''}
			<div className="videoWrap">{(item._source.path && this.props.searchIndex.name.indexOf('PXE') < 0) ? this.getVideoWidget(item) : ''}</div>
			</div>);
		}
		return comp;

	}
	 
}