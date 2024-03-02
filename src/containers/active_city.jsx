import React, { Component } from 'react';
import {connect} from 'react-redux'
 
class ActiveCity extends Component {
	


	render() {

		if (!this.props.activatedCity) {
    		return (
      			<div className="active-city">
        			<p>Select a city...</p>
      			</div>
    		);
  }

		const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activatedCity.slug}`;

		return(
			<div className="active-city">
				<p>{this.props.activatedCity.name}</p>
				<img src={url} alt="" width="100%"/>
			</div>
		);
	}
}

function mapReduxStateToProps(reduxState) {
	return { activatedCity: reduxState.activatedCity };
}

export default connect(mapReduxStateToProps)(ActiveCity);