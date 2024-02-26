import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activeCity } from '../actions';


class City extends Component {
	handleClick = () => {
		// Redux Action
		
		this.props.activeCity(this.props.city)
		console.log(this.props.activeCity);
	}


	render() {
        let classes = "list-group-item";
        if (this.props.city === this.props.activeCity) {
            classes += " selected";
        }

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

function mapReduxStateToProps(reduxState) {
    return {
        activeCity: reduxState.activeCity
    };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);