import React, { Component } from 'react';
import SiderBar from '../components/SiderBar';

class SiderBarContainer extends Component {
    constructor(props) {
	  super(props);
	  this.state = {
		collapsed: false
	  };
	  this.onCollapse = this.onCollapse.bind(this);
	}
	
	onCollapse(collapsed) {
		this.setState({ collapsed });
	}
	
	render() {
		return (
		  <SiderBar 
			onCollapse={this.onCollapse}
			collapsed={this.state.collapsed}
		  />
		)
	}
}

export default SiderBarContainer;
