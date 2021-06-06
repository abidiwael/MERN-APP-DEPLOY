import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import "./Login.css";

const Login = ({ history }) => {
	const [user, setUser] = useState({});
	const errors = useSelector((state) => state.userReducer.errors);
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login(user, history));
	};
	useEffect(() => {
		return () => {
			dispatch(videErrors());
		};
	}, []);
	return (
		<div className='registration-form'>
			<form onSubmit={handleLogin}>
				<div className='form-icon'>
					<span>
						<i className='icon icon-user' />
					</span>
				</div>
        
			{errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
				<br />
				<div className='form-group'>
					<input
						type='email'
						id='inputEmail'
						name='email'
						className='form-control item'
						placeholder='Username'
						required
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						name='password'
						id='inputPassword'
						className='form-control item'
						placeholder='Password'
						required
						onChange={handleChange}
					/>
				</div>
				<br />
				<br />
				<br />
				<div className='form-group'>
					<button type='submit' className='btn btn-block create-account'>
						Log In
					</button>
				</div>
			</form>
			<div className='social-media'>
				<h5>Log in with social media</h5>
				<div className='social-icons'>
					<a href='#'>
						<i className='icon-social-facebook' title='Facebook' />
					</a>
					<a href='#'>
						<i className='icon-social-google' title='Google' />
					</a>
					<a href='#'>
						<i className='icon-social-twitter' title='Twitter' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
