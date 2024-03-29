// external modules
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import citiesReducer from './reducers/cities_reducer';
import activatedCityReducer from './reducers/activated_city_reducer';

const reducers = combineReducers({
  //changeMe: (state = null, action) => state
  cities: citiesReducer,
  activatedCity: activatedCityReducer
});

// render an instance of the component in the DOM
const root = document.getElementById('root')
createRoot(root).render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
