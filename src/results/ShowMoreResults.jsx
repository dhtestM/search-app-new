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
import Button from '@material-ui/core/Button';

export default class ShowMoreResult extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			allData: this.props.array,
			resultCount: 10,
			resultsShown: 0,
			currentData: null,
			displayButton: false
		}
	}

	setCurrentData1 = (props) => {
		let resultsToShow = null;
		let showButton = false; 
		const newRes = props ? props : this.props;
		const resultsShown = props ? props.resultsShown : this.state.resultsShown;
		if (this.props.array.length > (resultsShown + this.state.resultCount)) {
			resultsToShow = this.state.resultsShown + this.state.resultCount;
			showButton = true;
		} else {
			resultsToShow = this.props.array.length;
		}
		this.setState({
			resultsShown: resultsToShow,
			currentData: this.props.array.slice(0, resultsToShow),
			displayButton: showButton
		})
	}

	setCurrentData = (props) => {
		let resultsToShow = null;
		let showButton = false; 
		const newRes = props ? props : this.props;
		const resultsShown = props ? props.resultsShown : this.state.resultsShown;
		if (newRes.array.length > (resultsShown + this.state.resultCount)) {
			resultsToShow = resultsShown + this.state.resultCount;
			showButton = true;
		} else {
			resultsToShow = newRes.array.length;
		}
		this.setState({
			resultsShown: resultsToShow,
			currentData: newRes.array.slice(0, resultsToShow),
			displayButton: showButton
		})
	}

	componentWillMount() {
		this.setCurrentData();
	}

	componentWillReceiveProps(nextProps, state) {
		this.setCurrentData(nextProps);
	}

	handleShowMore = () => {
		this.setCurrentData();
	}

	render() {
		return (<div>
		  {this.props.children(this.state.currentData)}
		  <Button  className={this.state.displayButton ? "showMore" : "showMore hide"} onClick={this.handleShowMore}>show more</Button>
		</div>)
	}
}