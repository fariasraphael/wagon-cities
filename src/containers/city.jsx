import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class City extends Component {
	
    handleClick = () => {
		this.props.activeCity(this.props.city);
        console.log(this.props.city.name);
	}

	render() {
        
        let classes = "list-group-item";
        if (this.props.city === this.props.activatedCity) {
            classes += " selected"
        }


        return (
            <div className={classes} onClick={this.handleClick}>
                {this.props.city.name}
            </div>
        );
    }
}

import { activeCity } from '../actions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { activeCity: activeCity },
        dispatch
    );
}

function mapReduxStateToProps(reduxState) {
    return {    
        activatedCity: reduxState.activatedCity
    };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);