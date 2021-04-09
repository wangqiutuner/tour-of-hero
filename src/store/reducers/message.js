import { ADD_MESSAGE, CLEAR_MESSAGES } from '../actions/index';

export const messages = (state = [], action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return [...state, action.str];
		case CLEAR_MESSAGES:
			return [];
		default:
			return state;
	}
};

