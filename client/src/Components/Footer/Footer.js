import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	return (
		<div className='footer-basic'>
			<footer>
				<div className='social'>
					<a>
						<i className='icon ion-social-instagram' />
					</a>
					<a>
						<i className='icon ion-social-snapchat' />
					</a>
					<a>
						<i className='icon ion-social-twitter' />
					</a>
					<a>
						<i className='icon ion-social-facebook' />
					</a>
				</div>
				<ul className='list-inline'>
					{isAuth ? (
						<>
							<li className='list-inline-item'>
								<Link to='/home'>
									<a>Home</a>
								</Link>
							</li>
							<li className='list-inline-item'>
								<Link to='/favorites'>
									<a>Favorites</a>
								</Link>
							</li>
							<li className='list-inline-item'>
								<Link to='/read_later'>
									<a>Read later</a>
								</Link>
							</li>
							<li className='list-inline-item'>
								<Link to='/profile'>
									<a>Profile</a>
								</Link>
							</li>
							<li className='list-inline-item'>
								<Link to='/about'>
									<a>About</a>
								</Link>
							</li>
						</>
					) : (
						<>
							<li className='list-inline-item'>
								<Link to='/home'>
									<a>Home</a>
								</Link>
							</li>
							<li className='list-inline-item'>
								<Link to='/about'>
									<a>About</a>
								</Link>
							</li>
						</>
					)}
				</ul>
				<p className='copyright'>Wael blog - GoMyCode © 2021</p>
			</footer>
		</div>
	);
};

export default Footer;
