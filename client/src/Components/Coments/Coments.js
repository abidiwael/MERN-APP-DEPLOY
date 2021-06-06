import React, { useState } from "react";
import logo from "../../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import "../Article/Article.css";
import { deleteComment, editComent } from "../../Redux/actions/coment";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";

const Coments = ({ coment }) => {
	const user = useSelector((state) => state.userReducer.user);

	const dispatch = useDispatch();
	//modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//edit
	const [text, setText] = useState(coment.text);
	return (
		<div className='article-clean'>
			<div className='container bootdey'>
				<div className='row '>
					<div className='col-1'></div>
					<div className='col-10'>
						<div className='panel'>
							<div className='panel-body'>
								<div className='media-block'>
									<a className='media-left' href='#'>
										<img
											className='img-circle img-sm'
											alt='Profile Picture'
											src={logo}
										/>
									</a>
									<div className='media-body'>
										<div className='mar-btm'>
											<a
												href='#'
												className='btn-link text-semibold media-heading box-inline'
											>
												{coment.user_name}--
												<span style={{ color: "#ee2222" }}>
													<strong>{coment.createdAt}</strong>
												</span>
											</a>
										</div>
										<p>{coment.text}</p>
										<div className='pad-ver'>
											<div className='btn-group'>
												{user._id === coment.user_id ? (
													<>
														<a //edit coment
															className='btn btn-trans btn-icon fa fa-edit add-tooltip'
															onClick={handleShow}
														/>
													</>
												) : (
													<></>
												)}
												{user._id === coment.user_id ||
												user.role === "admin" ? (
													<>
														<a //delete coment
															className='btn btn-trans btn-icon fa fa-trash add-tooltip'
															onClick={() =>
																dispatch(deleteComment(coment._id))
															}
														/>
													</>
												) : (
													<></>
												)}
												{/* <a //delete coment
													className='btn btn-trans btn-icon fa fa-trash add-tooltip'
													onClick={() => dispatch(deleteComment(coment._id))}
												/> */}
											</div>
											<Modal
												show={show}
												onHide={handleClose}
												backdrop='static'
												keyboard={false}
											>
												<Modal.Header closeButton>
													<Modal.Title>Edit coment</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<InputGroup size='sm' className='mb-3'>
														<FormControl
															aria-label='Small'
															aria-describedby='inputGroup-sizing-sm'
															name='text'
															onChange={(e) => setText(e.target.value)}
															value={text}
														/>
													</InputGroup>
												</Modal.Body>
												<Modal.Footer>
													<Button variant='secondary' onClick={handleClose}>
														Close
													</Button>
													<Button
														variant='primary'
														onClick={() => {
															dispatch(editComent(coment._id, { text }));
															handleClose();
														}}
													>
														Save
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
										<hr />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-1'></div>
			</div>
		</div>
	);
};

export default Coments;
