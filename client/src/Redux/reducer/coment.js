import { GET_ALL_COMENTS } from "../constants/coment";

const initState = {
	coments: [],
};

const comentReducer = (state = initState, {type, payload}) => {
	switch (type) {
		case GET_ALL_COMENTS:
			return { ...state, coments: payload };
		default:
			return state;
	}
};

export default comentReducer;
