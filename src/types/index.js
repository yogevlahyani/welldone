import _ from 'lodash';

// Constants
const _CRUD = [ 'CREATE', 'READ', 'UPDATE', 'DELETE' ];

let _actions = {
	CATEGORY: _CRUD,
	LOCATION: _CRUD
};

let process = (actions = {}, data = {}, parentKey = '', sep = '_') => {
	let clean = {};

	_.each(data, (items, key) => {
		let currentKey = (parentKey) ? parentKey + sep + key : key;

		if (_.isArray(items) || _.isPlainObject(items)) {
			clean[key] = process(actions, items, currentKey, sep);
		} else {
			clean[items] = parentKey + sep + items;
		}
	});

	return _.assign({}, actions, clean);
};

export const Actions = process({}, _actions);