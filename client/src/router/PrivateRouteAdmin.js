import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
	const token = localStorage.getItem("token");
	const user = useSelector((state) => state.userReducer.user);
	if ((user.role = "admin")&& (token)) {
		return <Route component={Component} {...rest} />;
	}
	return <Redirect to='/login' />;
};

export default PrivateRouteAdmin;
