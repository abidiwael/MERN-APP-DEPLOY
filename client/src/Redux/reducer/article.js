import { GET_ALL_ARTICLES, GET_ONE_ARTICLE } from "../constants/article";

// initialstate
const initialState = {
	articles: [],
	article: {},
};

// pure function=> (state, {type,payload})=>
const articleReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_ARTICLES:
			return { ...state, articles: payload };

		default:
			return state;
	}
};

export default articleReducer;
