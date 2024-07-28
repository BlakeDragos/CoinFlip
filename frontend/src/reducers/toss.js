import { BET, INFO } from '../constants/actionTypes';

const initialBet = {
	coinResult: "Heads",
	tokensWon: 0,
	winningsMultiplier: 0,
	victory: null
}
const initialInfo = {
	tokens: localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')).tokens : 100,
	history: localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')).history : [],
	streak: localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')).streak : 0
}


const tossReducer = (state = { bet: initialBet , info: initialInfo }, action) => {
	switch (action.type) {
		case BET:
			localStorage.setItem('bet', JSON.stringify(action?.data) );
			return { ...state, bet: action?.data };
		case INFO:
			localStorage.setItem('info', JSON.stringify(action?.infoResponse.data) );
			return { ...state, info: action?.infoResponse.data};
		default:
			return state;
	}
};
export default tossReducer;
