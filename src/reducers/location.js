import _ from 'lodash';
import { Actions } from '../types';

const locations = localStorage.getItem('locations');
const defaultState = JSON.parse(locations);

const Copy = (state) => {
	return _.clone(state);
};

const Reset = (state) => {
	let copy = Copy(state);

	copy = defaultState;

	return copy;
};

export default (state = defaultState, action) => {
	let copy = Copy(state);

	switch (action.type) {
		case Actions.LOCATION.CREATE:
            copy = _.concat(copy, action.data);
            
            localStorage.setItem('locations', JSON.stringify(copy));
			return copy;

		case Actions.LOCATION.READ:
			// if id show specific location .. (simulate)
			if (action.data) { return copy; }

			return copy;

		case Actions.LOCATION.DELETE:
			const index = parseInt(action.data);
			copy.splice(index, 1);

			localStorage.setItem('locations', JSON.stringify(copy));

			return copy;

        default:
			return state;
	}
}
