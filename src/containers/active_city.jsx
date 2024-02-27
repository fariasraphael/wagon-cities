import React, { Component } from 'react';
import {connect} from 'react-redux'
 
class ActiveCity extends Component {
	


	render() {

		if (!this.props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

		const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

		return(
			<div className="active-city">
				<p>{this.props.activeCity.name}</p>
				<img src={url} alt="" width="100%"/>
			</div>
		);
	}
}

function mapReduxStateToProps(state) {
	return { activeCity: state.activeCity };
}

export default connect(mapReduxStateToProps)(ActiveCity);