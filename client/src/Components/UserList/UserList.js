import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UsersTab from "../UserTable/UsersTab";
import { useDispatch } from "react-redux";
import { addUser, getUsers, videErrors } from "../../Redux/actions/user";
import { Button, Modal, Form } from "react-bootstrap";
import "./UserList.css";
import Errors from "../../Components/Errors/Error";

const UserList = () => {

	const errors = useSelector((state) => state.userReducer.errors);
	const [utilisateur, setutilisateur] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		role: "",
	});

	const handleChange = (e) => {
		setutilisateur({...utilisateur, [e.target.name]:e.target.value})
	};

	//modal add
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
		  dispatch(videErrors());
		};
	  }, []);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const users = useSelector((state) => state.userReducer.users);
	return (
		<div>
			<div className='modalbtn'>
				<Button variant='outline-success' onClick={handleShow}>
					Add user
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					{errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
					<Modal.Body>
						<div className='form-group'>
							<input
								className='form-control item'
								placeholder='Full name'
								type='text'
								id='inputnAME'
								name='name'
								required
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
								placeholder='Email address'
								value={utilisateur.email}
								required
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='password'
								name='password'
								className='form-control item'
								id='inputPassword'
								placeholder='Password'
								value={utilisateur.password}
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
								value={utilisateur.phone}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<Form>
								<Form.Group controlId='exampleForm.SelectCustom'>
									<Form.Control
										as='select'
										type='text'
										name='role'
										value={utilisateur.role}
										custom
										onChange={handleChange}
									>
										<option>Select type ...</option>
										<option>admin</option>
										<option>user</option>
									</Form.Control>
								</Form.Group>
							</Form>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={()=>dispatch(addUser(utilisateur))}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			{users.map((user) => (
				<UsersTab user={user} key={user._id} />
			))}
		</div>
	);
};

export default UserList;
