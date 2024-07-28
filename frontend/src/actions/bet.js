import { BET, INFO } from '../constants/actionTypes';
import * as api from '../api';
import * as messages from '../messages';

export const bet = (formData) => async (dispatch) => {
	try {
		const { data } = await api.bet(formData);
		dispatch({ type: BET, data });
		const infoResponse = await api.info();
		dispatch({ type: INFO, infoResponse});
	} catch (error) {
		messages.error(error.response.data.message);
	}
};

export const info = () => async (dispatch) => {
	try {
		const infoResponse = await api.info();
		dispatch({ type: INFO, infoResponse});
	} catch (error) {
		messages.error(error.response.data.message);
	}
};
