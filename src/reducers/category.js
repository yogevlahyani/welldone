import _ from 'lodash';
import { Actions } from '../types';

const categories = localStorage.getItem('categories');
const defaultState = JSON.parse(categories);

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
				name: action.data
			});

			localStorage.setItem('categories', JSON.stringify(copy));

			return copy;

		case Actions.CATEGORY.READ:
			// if id show specific category .. (simulate)
			if (action.data) { return copy; }

			return copy;

		case Actions.CATEGORY.DELETE:
			const index = parseInt(action.data);
			copy.splice(index, 1);

			localStorage.setItem('categories', JSON.stringify(copy));

			return copy;

        default:
			return state;
	}
}
