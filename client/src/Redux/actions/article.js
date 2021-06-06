import axios from "axios";
import { GET_ALL_ARTICLES, GET_ONE_ARTICLE } from "../constants/article";

export const getArticles = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/articles");
		dispatch({ type: GET_ALL_ARTICLES, payload: res.data.articles });
	} catch (error) {
		console.log(error);
	}
};

export const addArticle = (newArticle) => async (dispatch) => {
	try {
		await axios.post("/api/articles/add_article", newArticle);
		dispatch(getArticles());
	} catch (error) {
		console.log(error);
	}
};

export const deleteArticle = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/articles/${id}`);
		dispatch(getArticles());
	} catch (error) {
		console.log(error);
	}
};

export const editArticle = (id, newDataArticle) => async (dispatch) => {
	try {
		await axios.put(`/api/articles/edit_article/${id}`, newDataArticle)
		dispatch(getArticles())
	} catch (error) {
		console.log(error)
	}
};

// export const AddToFav = (id, newDataArticle) => async (dispatch) => {
// 	try {
// 		await axios.put(`/api/articles/add_to_fav/${id}`, newDataArticle)
// 		dispatch(getArticles())
// 	} catch (error) {
// 		console.log(error)
// 	}
// };


