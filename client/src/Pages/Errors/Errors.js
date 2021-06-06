import "./Errors.css";
import { Link } from "react-router-dom";

const Errors = () => {
	return (
		<div className='abody'>
			<div className='error-header'> </div>
			<div className='container '>
				<section className='error-container text-center'>
					<h1>404</h1>
					<div className='error-divider'>
						<h2>PAGE NOT FOUND.</h2>
						<p className='description'>We Couldn't Find This Page</p>
					</div>
					<Link to='/home'>
					<a href='#index.html' className='return-btn'>
						<i className='fa fa-home' />
						Home
					</a>
					</Link>
				</section>
			</div>
		</div>
	);
};

export default Errors;
