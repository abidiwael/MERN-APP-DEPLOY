import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import "./Register.css";

const Register = ({ history }) => {
  const [user, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(user, history));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    <div className='registration-form'>
			<form>
				<div className='form-icon'>
					<span>
						<i className='icon icon-user' />
					</span>
				</div>
				{errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
				<div className='form-group'>
					<input
						className='form-control item'
						placeholder='Full name'
						type='text'
						id='inputnAME'
						name='name'
						required
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						id='inputEmail'
						type='email'
						name='email'
						className='form-control item'
						placeholder='Email address'
						required
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						name="password"
						className='form-control item'
						id='inputPassword'
						placeholder='Password'
						required
                        onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='number'
						className='form-control item'
						id='inputPhone'
						name='phone'
						placeholder='enter your phone number'
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<button type='submit' className='btn btn-block create-account'  onClick={handleRegister}>
						Create Account
					</button>
				</div>
			</form>
			<div className='social-media'>
				<h5>Sign up with social media</h5>
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

export default Register;
