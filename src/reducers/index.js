import { combineReducers } from 'redux';
import Category from './category';
import Location from './location';

const reducers = {
	categories: Category,
	locations: Location
};

export default combineReducers(reducers);
