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
import { ImageViewerPreviewComponent } from '@pearson-incubator/aquila-js-media';

export default class FigureResult extends React.Component {
	getImageWidget = (item) => {
		const data = {};
		data.displayPreview = false;
		data.type = 'image';
		const imageData = {};
		imageData.src = item._source.path;
		imageData.title = item._source.title;
		imageData.alt = item._source.alt || 'Image';
		imageData.caption = '';
		imageData.width = '100%';
		data.data = imageData;
	
		return (<div className="imageContainer" ref={(div) => { this.imageContainer = div; }}>
        <ImageViewerPreviewComponent {...Object.assign(data, { parentSelector: () => this.imageContainer })} />
      </div>)
	}

	render() {
		let comp = null; 
		let { item, index } = this.props;
		/*eslint-disable */
		if (item && (item.highlight && item.highlight.chapterTitle && item.highlight.chapterTitle.length)) {
			comp = (<div className="resCard figureRes" key={index}>
			  <div
			  className="title"
			  dangerouslySetInnerHTML={{ __html: item.highlight.chapterTitle.reduce((accumulator, title) => {
			return `${r} ${title}`
			}, '') }}
			  onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
			/><span className="spanElasticScore">({item._score})</span>
			{(item._source.path && this.props.searchIndex.name.indexOf('PXE') < 0) ? <img src={item._source.path} className="imgThumb" /> : ''}
			</div>);
		}  else if (item && item._source && item._source.label) {
			comp = (<div className="resCard figureRes" key={index}><div
			  className="title"
			  dangerouslySetInnerHTML={{ __html: item._source.label }}
			  onClick={() => this.props.onSearchResultClick(item.id, 'moreRes', item._source.pageUrn)} 
			/><span className="spanElasticScore">({item._score})</span>
			{item._source.title ? <div className="desc">{item._source.title}</div> : ''}
			{(item._source.path && this.props.searchIndex.name.indexOf('PXE') < 0) ? this.getImageWidget(item) : ''}
			</div>);
		}
		return comp;
	}
	 
}