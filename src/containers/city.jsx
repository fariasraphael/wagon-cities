import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeCity } from '../actions';


class City extends Component {
	
    handleClick = (e) => {
		// Redux Action
		this.props.activeCity(this.props.city)
	}

	render() {
        
        let classes = "list-group-item";
        return (
            <div className={classes} onClick={this.handleClick}>
                {this.props.city.name}
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { activeCity: activeCity },
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(City);