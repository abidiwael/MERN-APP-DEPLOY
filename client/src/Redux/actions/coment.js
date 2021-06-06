import axios from "axios";
import { GET_ALL_COMENTS } from "../constants/coment";

export const getComents = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/comments");
		dispatch({ type: GET_ALL_COMENTS, payload: res.data.coments });
	} catch (error) {
		console.log(error);
	}
};

export const addComent = (newComent) => async (dispatch) => {
	try {
		await axios.post("/api/comments/add", newComent);
		dispatch(getComents());
	} catch (error) {
		console.log(error);
	}
};

export const deleteComment = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/comments/${id}`);
		dispatch(getComents());
	} catch (error) {
		console.log(error);
	}
};

export const editComent = (id, newDataComent) => async (dispatch) => {
	try {
		await axios.put(`/api/comments/${id}`, newDataComent)
		dispatch(getComents())
	} catch (error) {
		console.log(error)
	}
};








