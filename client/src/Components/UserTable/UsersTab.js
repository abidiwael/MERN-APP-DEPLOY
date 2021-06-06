import "./UsersTab.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import avatar from "../../assets/user.png";
import { deleteUsers } from "../../Redux/actions/user";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const UsersTab = ({ user }) => {
	const dispatch = useDispatch();
	return (
		<div className='body'>
			<div className='container'>
				<div className='main-body'>
					<div className='row gutters-sm'>
						<div className='col-md-4 mb-3'>
							<div className='card'>
								<div className='card-body'>
									<div className='d-flex flex-column align-items-center text-center'>
										<img
											src={avatar}
											alt='Admin'
											className='rounded-circle'
											width={150}
										/>

										<div className='mt-3'>
											<h4>User Name</h4>
											<p className='text-secondary mb-1'>{user.name}</p>
											<p className='text-muted font-size-sm'>lorem ipsum</p>

											<button
												className='btn_class btn btn-danger'
												onClick={() => dispatch(deleteUsers(user._id))}
											>
												Delete account
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-8'>
							<div className='card mb-3'>
								<div className='card-body'>
									<div className='row'>
										<div className='col-sm-3'>
											<h6 className='mb-0'>Full Name</h6>
										</div>
										<div className='col-sm-9 text-secondary'>{user.name}</div>
									</div>
									<hr />
									<div className='row'>
										<div className='col-sm-3'>
											<h6 className='mb-0'>Email</h6>
										</div>
										<div className='col-sm-9 text-secondary'>{user.email}</div>
									</div>
									<hr />
									<div className='row'>
										<div className='col-sm-3'>
											<h6 className='mb-0'>Phone</h6>
										</div>
										<div className='col-sm-9 text-secondary'>
											{user.phone || "No phone number added"}
										</div>
									</div>
									<hr />
									<div className='row'>
										<div className='col-sm-3'>
											<h6 className='mb-0'>Password</h6>
										</div>
										<div className='col-sm-9 text-secondary'>
											{user.password}
										</div>
									</div>
									<hr />
									<div className='row'>
										<div className='col-sm-3'>
											<h6 className='mb-0'>Role</h6>
										</div>
										<div className='col-sm-9 text-secondary'>{user.role}</div>
									</div>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsersTab;
