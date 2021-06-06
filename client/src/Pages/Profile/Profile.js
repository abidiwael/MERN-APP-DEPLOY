import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import { Button, Modal } from "react-bootstrap";
import { deleteUsers, editUser, getUsers } from "../../Redux/actions/user";
const Profile = () => {
	const user = useSelector((state) => state.userReducer.user);

	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const [utilisateur, setutilisateur] = useState(user);

	const handleChange = (e) => {
		setutilisateur({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div className='page-content page-container' id='page-content'>
			<div className='padding'>
				<div className='row container d-flex justify-content-center'>
					<div className='col-xl-10 col-md-12'>
						<div className='card user-card-full'>
							<div className='row m-l-0 m-r-0'>
								<div className='col-sm-4 bg-c-lite-green user-profile'>
									<div className='card-block text-center text-white'>
										<div className='m-b-25'>
											<img
												src='https://img.icons8.com/bubbles/100/000000/user.png'
												className='img-radius'
												alt='User-Profile-Image'
											/>
										</div>
										<h6 className='f-w-600'>Full Name</h6>
										<h6 className='f-w-600'>{user && user.name}</h6>
										<div className='row'>
											<div className='col-6'>
												<Button variant='outline-success' onClick={handleShow}>
													Edit
												</Button>
											</div>
											<Modal show={show} onHide={handleClose}>
												<Modal.Header closeButton>
													<Modal.Title>Modal heading</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<div className='form-group'>
														<input
															id='inputName'
															name='name'
															type='text'
															className='form-control item'
															type='text'
															value={utilisateur.name}
															onChange={handleChange}
														/>
													</div>
													<div className='form-group'>
														<input
															id='inputEmail'
															type='email'
															name='email'
															className='form-control item'
															value={utilisateur.email}
															onChange={handleChange}
														/>
													</div>
													<div className='form-group'>
														<input
															type='password'
															name='password'
															className='form-control item'
															value={utilisateur.password}
															onChange={handleChange}
														/>
													</div>
													<div className='form-group'>
														<input
															type='number'
															name='phone'
															className='form-control item'
															value={utilisateur.phone}
															onChange={handleChange}
														/>
													</div>
													<div className='form-group'>
														<input
															readOnly
															type='text'
															name='role'
															className='form-control item'
															value={utilisateur.role}
														/>
													</div>
												</Modal.Body>
												<Modal.Footer>
													<Button variant='secondary' onClick={handleClose}>
														Close
													</Button>
													<Button
														variant='primary'
														onClick={() => {
															dispatch(editUser(user._id, utilisateur));
															handleClose();
														}}
													>
														Save Changes
													</Button>
												</Modal.Footer>
											</Modal>
											<div className='col-6'>
												<Button
													variant='outline-danger'
													onClick={() => dispatch(deleteUsers(user._id))}
												>
													Delete
												</Button>
											</div>
										</div>
										<i className=' mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16' />
									</div>
								</div>
								<div className='col-sm-8'>
									<div className='card-block'>
										<h6 className='m-b-20 p-b-5 b-b-default f-w-600'>
											Information
										</h6>
										<div className='row'>
											<div className='col-sm-6'>
												<p className='m-b-10 f-w-600'>Email</p>
												<h6 className='text-muted f-w-400'>
													{user && user.email}
												</h6>
											</div>
											<div className='col-sm-6'>
												<p className='m-b-10 f-w-600'>Phone</p>
												<h6 className='text-muted f-w-400'>
													{user && user.phone}
												</h6>
											</div>
											<div className='col-sm-6'>
												<p className='m-b-10 f-w-600'>Role</p>
												<h6 className='text-muted f-w-400'>
													{user && user.role}
												</h6>
											</div>
											<div className='col-sm-6'>
												<p className='m-b-10 f-w-600'>Password</p>
												<h6 className='text-muted f-w-400'>
													{user && user.password}
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
