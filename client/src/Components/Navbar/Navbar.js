import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getArticles } from "../../Redux/actions/article";
import { getComents } from "../../Redux/actions/coment";
import { getUsers, logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer.user);
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	return (
		<div>
			<div className='header-blue'>
				<nav className='navbar navbar-dark navbar-expand-md navigation-clean-search'>
					<div className='container'>
						<a className='navbar-brand'>
							<Link to='/'>Wael blog</Link>
						</a>
						<button
							className='navbar-toggler'
							data-toggle='collapse'
							data-target='#navcol-1'
						>
							<span className='sr-only'>Toggle navigation</span>
							<span className='navbar-toggler-icon' />
						</button>

						<div className='collapse navbar-collapse' id='navcol-1'>
							<ul className='nav navbar-nav'>
								<li className='nav-item' role='presentation'>
									<Link to='/home'>
										<a
											className='nav-link active'
											onClick={() => {
												dispatch(getArticles());
												dispatch(getComents());
											}}
										>
											Home
										</a>
									</Link>
								</li>
							</ul>
							{isAuth ? (
								<ul className='nav navbar-nav'>
									<li className='nav-item' role='presentation'>
										<Link to='/favorites'>
											<a
												className='nav-link active'
												onClick={() => {
													dispatch(getArticles());
													dispatch(getComents());
												}}
											>
												Favorites
											</a>
										</Link>
									</li>
									<li className='nav-item' role='presentation'>
										<Link to='/read_later'>
											<a
												className='nav-link active'
												onClick={() => {
													dispatch(getArticles());
													dispatch(getComents());
												}}
											>
												Read later
											</a>
										</Link>
									</li>
									{user.role === "admin" ? (
										<>
											<li className='nav-item' role='presentation'>
												<Link to='/users'>
													<a
														className='nav-link active'
														onClick={() => dispatch(getUsers())}
													>
														Users
													</a>
												</Link>
											</li>
										</>
									) : (
										<></>
									)}
									<li className='nav-item' role='presentation'>
										<Link to='/profile'>
											<a className='nav-link active' href='#'>
												Profile
											</a>
										</Link>
									</li>
								</ul>
							) : (
								<></>
							)}
							<ul className='nav navbar-nav'>
								<li className='nav-item' role='presentation'>
									<Link to='/about'>
										<a className='nav-link active'>About</a>
									</Link>
								</li>
							</ul>
							<form className='form-inline mr-auto' target='_self'>
								<div className='form-group'></div>
							</form>
							<>
								{isAuth ? (
									<span className='navbar-text'>
										<Link to='/'>
											<a
												className='btn btn-light action-button'
												onClick={() => dispatch(logout())}
											>
												Log Out
											</a>
										</Link>
									</span>
								) : (
									<>
										<span className='navbar-text'>
											<Link to='/login'>
												<a className='login'>Log In</a>
											</Link>
										</span>
										<Link to='/register'>
											<a className='btn btn-light action-button' role='button'>
												Sign Up
											</a>
										</Link>
									</>
								)}
							</>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
