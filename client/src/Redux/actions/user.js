import axios from "axios";
import {
	LOAD_USER,
	REGISTER_USER,
	FAIL_USER,
	LOGIN_USER,
	CURRENT_USER,
	LOGOUT_USER,
	GET_ALL_USERS,
} from "../constants/user";

export const register = (user, history) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		let result = await axios.post("/api/user/register", user);
		//succees action
		dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}
		history.push("/profile");
	} catch (error) {
		// fail
		dispatch({ type: FAIL_USER, payload: error.response.data.errors });
	}
};

export const login = (user, history) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		let result = await axios.post("/api/user/login", user);
		dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
		history.push("./home");
	} catch (error) {
		dispatch({ type: FAIL_USER, payload: error.response.data.errors });
	}
};

export const current = () => async (dispatch) => {
	try {
		const config = {
			headers: {
				authorization: localStorage.getItem("token"),
			},
		};
		let result = await axios.get("/api/user/current", config);
		dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
	} catch (error) {
		dispatch({ type: FAIL_USER, payload: error.response.data });
	}
};

// logout
export const logout = () => {
	return {
		type: LOGOUT_USER,
	};
};

export const videErrors = () => {
	return {
		type: "VIDE_ERRORS",
	};
};

export const getUsers = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/user/users");
		dispatch({ type: GET_ALL_USERS, payload: res.data.users });
	} catch (error) {
		console.log(error);
	}
};

export const deleteUsers = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/user/delete_user/${id}`);
		dispatch(getUsers());
	} catch (error) {
		console.log(error);
	}
};

export const editUser = (id, newUserData) => async (dispatch) => {
	try {
		await axios.put(`/api/user/edit_user/${id}`, newUserData);
		dispatch(getUsers());
	} catch (error) {
		console.log(error);
	}
};

export const addUser = (Newuser) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		await axios.post("/api/user/", Newuser);
		dispatch(getUsers());
	} catch (error) {
		// fail
		dispatch({ type: FAIL_USER, payload: error.response.data.errors });
	}
};
