import _ from 'lodash';
import { Actions } from '../types';

const defaultState = [];

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
			return copy;

		case Actions.LOCATION.READ:
			// if id show specific location .. (simulate)
			if (action.data) { return copy; }

			return copy;

        default:
			return state;
	}
}
