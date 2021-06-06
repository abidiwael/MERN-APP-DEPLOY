import React from "react";
import "../../Components/Navbar/Navbar.css";
import logo from "../../assets/book.svg";
import { Link } from "react-router-dom";
const LandPage = () => {
	return (
		<div>
			<div className='header-blue'>
				<div className='container hero'>
					<div className='row'>
						<div className='col-12 col-lg-6 col-xl-5 offset-xl-1'>
							<h1>
								<strong>Wael blog</strong>
							</h1>
							<p>
								Mauris egestas tellus non ex condimentum, ac ullamcorper sapien
								dictum. Nam consequat neque quis sapien viverra convallis. In
								non tempus lorem. Nam consequat neque quis sapien viverra convallis. In
								non tempus lorem.
							</p>
							<Link to='/home'>
								<button
									class='btn btn-light btn-lg action-button'
									type='button'
								>
									Home
								</button>
							</Link>
						</div>
						<div className='col-md-6 '>
							<br />
							<div className='iphone-mockup'>
								<img src={logo} className='device' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandPage;
