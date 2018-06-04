import { Actions } from '../types';

export const fetch = () => {
	return (dispatch) => {
		dispatch({
            type: Actions.LOCATION.READ
        });
	}
};

export const add = (location) => {
    if (!location) { return false; }

	return (dispatch) => {
		dispatch({
            type: Actions.LOCATION.CREATE,
            data: location
        });
	}
};