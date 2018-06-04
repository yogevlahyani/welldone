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
		case Actions.CATEGORY.CREATE:
			copy = _.concat(copy, {
				id: copy.length,
				name: action.data
			});
			return copy;

		case Actions.CATEGORY.READ:
			// if id show specific category .. (simulate)
			if (action.data) { return copy; }

			return copy;

        default:
			return state;
	}
}
