import React from "react";
import "./About..css";
const About = () => {
	return (
		<div className='features-clean'>
			<div className='container'>
				<div className='intro'>
					<h2 className='text-center'>About us</h2>
					<p className='text-center'>
						Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
						Vestibulum nibh erat, pellentesque ut laoreet vitae.
					</p>
				</div>
				<div className='row features'>
					<div className='col-sm-6 col-lg-4 item'>
						<i className='fa fa-map-marker icon' />
						<h3 className='name'>Works everywhere</h3>
						<p className='description'>
							Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
							Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
						</p>
					</div>
					<div className='col-sm-6 col-lg-4 item'>
						<i className='fa fa-clock-o icon' />
						<h3 className='name'>Always available</h3>
						<p className='description'>
							Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
							Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
						</p>
					</div>
					<div className='col-sm-6 col-lg-4 item'>
						<i className='fa fa-list-alt icon' />
						<h3 className='name'>Customizable</h3>
						<p className='description'>
							Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
							Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
						</p>
					</div>
					<div className='col-sm-6 col-lg-4 item'>
						<i className='fa fa-leaf icon' />
						<h3 className='name'>Organic</h3>
						<p className='description'>
							Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
							Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
						</p>
					</div>
					<div className='col-sm-6 col-lg-4 item'>
						<i className='fa fa-plane icon' />
						<h3 className='name'>Fast</h3>
						<p className='description'>
							Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
							Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
						</p>
					</div>
					<div className='col-sm-6 col-lg-4 item'>
						<i className='fa fa-phone icon' />
						<h3 className='name'>Mobile-first</h3>
						<p className='description'>
							Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
							Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
