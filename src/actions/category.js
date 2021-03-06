import { Actions } from '../types';

export const fetch = () => {
	return (dispatch) => {
		dispatch({
            type: Actions.CATEGORY.READ
        });
	}
};

export const add = (name) => {
    if (!name) { return false; }

	return (dispatch) => {
		dispatch({
            type: Actions.CATEGORY.CREATE,
            data: name
        });
	}
};

export const del = (index) => {
	return (dispatch) => {
		dispatch({
            type: Actions.CATEGORY.DELETE,
            data: index
        });
	}
};