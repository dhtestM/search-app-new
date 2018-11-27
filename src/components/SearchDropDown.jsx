import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


export default class SearchDropDown extends Component {
	constructor(props){
		super(props);
		this.state = {
	    	open: false,
	    	currentObj: props.searchIndex
	  	};
	}

	handleOpen = () => {
		this.setState({ open: true });
	}

	handleClose = () => {
		this.setState({ open: false });
	}

	handleChange = (e) => {
		const currentItem = this.props.content.find(obj => obj.name === e.target.value);
		this.setState({ currentObj: currentItem});
		this.props.cbk(e.target.value);
	}

	render() {
		return(
			 <div className="dropdown-menu">
	        	<Select
	        		className="searchContentSelect"
		            open={this.state.open}
		            onClose={this.handleClose}
		            onOpen={this.handleOpen}
		            value={this.state.currentObj.name}
		            onChange={this.handleChange}
		            inputProps={{
		              name: 'SearchContent',
		               id: 'search-content'
		            }}
	          	>
		          {this.props.content.map((choices, index) =>
		            (<MenuItem
		              component="div"
		              role="menuitem"
		              key={index}
		              value={choices.name}
		            >
		              <span role="menuitem">{choices.name}</span>
		            </MenuItem>
		            )
		          )}
	        	</Select>
	        </div>
        )
	}
}