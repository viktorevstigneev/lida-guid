import initialState from '../initialState';
import { LOAD_PROFILE_DATA_SUCCESS } from '../constants';

const main = (state = initialState.main, action) => {
	switch (action.type) {
		case LOAD_PROFILE_DATA_SUCCESS:
			return {
				data: action.payload,
			};
		default:
			return state;
	}
};

export default main;
