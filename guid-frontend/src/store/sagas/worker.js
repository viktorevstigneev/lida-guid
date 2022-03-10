import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { loadProfileDataFailed, loadProfileDataSuccess } from '../actions/loadProfileData/loadProfileData';
import { API_URL } from '../constants';

export function* authorization(action) {
	try {
		const responseData = yield call(() =>
			axios({
				method: 'POST',
				data: {
					username: action.userName,
					password: action.password,
				},
				withCredentials: true,
				url: `${API_URL}/signin`,
			})
		);
		yield put(authorizationSuccess(responseData));
	} catch (error) {
		yield put(authorizationFailed(error));
	}
}
// export function* loadProfileData(action) {
// 	try {
// 		const responseData = yield call(() => axios.get(`${API_URL}/profile`).then((response) => response.data));
// 		yield put(loadProfileDataSuccess(responseData));
// 	} catch (error) {
// 		yield put(loadProfileDataFailed(error));
// 	}
// }

export function* loadProfileData(action) {
	try {
		console.log('action.id: ', action.id);
		const responseData = yield call(() =>
			axios.get(`${API_URL}/profile/${action.id}`, { withCredentials: true }).then((response) => response.data)
		);
		yield put(loadProfileDataSuccess(responseData));
	} catch (error) {
		yield put(loadProfileDataFailed(error));
	}
}

