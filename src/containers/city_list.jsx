import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from '../containers/city';


class CityList extends Component {
	//static defaultProps = {
	//	cities: [
	//		{ name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  	//		{ name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  	//		{ name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
	//	]
	//}

	componentDidMount () {
		this.props.setCities();
	}

	render(){
		return(
			<div className="cities">
				{this.props.cities.map((city) => <City city={city} key={city.name} />)}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ setCities: setCities},
		dispatch
	);
}

function mapReduxStateToProps(reduxState) {
	return {
		cities: reduxState.cities
	}
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);