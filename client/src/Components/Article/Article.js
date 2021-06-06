import { React, useState } from "react";
import "./Article.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, editArticle } from "../../Redux/actions/article";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import Coments from "../Coments/Coments";
import { addComent } from "../../Redux/actions/coment";

const Article = ({ article }) => {
	const user = useSelector((state) => state.userReducer.user);

	const [title, setTitle] = useState(article.title);
	const [text_article, setText] = useState(article.text_article);
	const [categorie, setCategory] = useState(article.categorie);

	const [coment, setcoment] = useState({ text: "" });

	const handleChange = (e) => {
		setcoment({
			...coment,
			[e.target.name]: e.target.value,
			article_id: article._id,
			user_name: user.name,
			user_id: user._id,
		});
	};

	const coments = useSelector((state) => state.comentReducer.coments);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();

	return (
		<div className='bodycom'>
			<div className='article-clean'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-xl-8 offset-lg-1 offset-xl-2'>
							<div className='intro'>
								<h1 className='text-center'>
									{article.title}--
									<span style={{ color: "#ee2222" }}>
										<strong>{article.categorie}</strong>
									</span>
								</h1>

								<p className='text-center'>
									<span className='by'>
										<strong>by</strong>
									</span>
									<strong>
										<a style={{ color: "#1ed6ee" }}>{article.poster_name}</a>
									</strong>

									<strong>
										<span className='date' style={{ color: "#1ed6ee" }}>
											{article.createdAt}
										</span>
									</strong>
								</p>
							</div>
							<div className='text'>
								<div className='row'>
									<div className='col-lg-8'>
										<h2>{article.title}</h2>
									</div>
									{/* ********************************* add to fav and and add to read later ***************************************** */}
									<div className='col-lg-4'>
										<div className='starbox'>
											<span className='animatedstar'>
												<i className='fas fa-heart fa-2x' />
											</span>
											<span className='animatedstar'>
												<i className='fas fa-bookmark fa-2x' />
											</span>
										</div>
									</div>
								</div>
								<p>{article.text_article}</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-9'></div>
						<div className='col-lg-1'>
							{user._id === article.poster_id ? (
								<>
									<div className='mar-top clearfix'>
										<button
											className='btn btn-sm btn-primary pull-right'
											type='submit'
											onClick={handleShow}
										>
											<i className='fa fa-pencil fa-fw' /> Edit
										</button>
									</div>
								</>
							) : (
								<></>
							)}
						</div>
						<Modal
							show={show}
							onHide={handleClose}
							backdrop='static'
							keyboard={false}
						>
							<Modal.Header closeButton>
								<Modal.Title>Edit Article</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<InputGroup size='sm' className='mb-3'>
									<FormControl
										aria-label='Small'
										aria-describedby='inputGroup-sizing-sm'
										name='title'
										onChange={(e) => setTitle(e.target.value)}
										value={title}
									/>
								</InputGroup>
								<InputGroup>
									<FormControl
										as='textarea'
										aria-label='With textarea'
										name='text_article'
										onChange={(e) => setText(e.target.value)}
										value={text_article}
									/>
								</InputGroup>
								<Form>
									<Form.Group controlId='exampleForm.SelectCustom'>
										<Form.Control
											as='select'
											name='categorie'
											onChange={(e) => setCategory(e.target.value)}
											value={categorie}
											custom
										>
											<option>Select category ...</option>
											<option>Scientist</option>
											<option>Sport</option>
											<option>Literary</option>
											<option>Art's</option>
											<option>Other</option>
										</Form.Control>
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button variant='secondary' onClick={handleClose}>
									Close
								</Button>
								<Button
									variant='primary'
									onClick={() => {
										dispatch(
											editArticle(article._id, {
												title,
												text_article,
												categorie,
											})
										);
										handleClose();
									}}
								>
									Save
								</Button>
							</Modal.Footer>
						</Modal>

						<div className='col-lg-1'>
							{user._id === article.poster_id || user.role === "admin" ? (
								<>
									<div className='mar-top clearfix'>
										<button
											className='btn btn-sm btn-danger pull-right'
											type='submit'
											onClick={() => dispatch(deleteArticle(article._id))}
										>
											<i className='fa fa-trash fa-fw' />
											Delete
										</button>
									</div>
								</>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>

				{/* ------------------------------- this is comment part --------------------------- */}

				<div className='container bootdey'>
					<div className='row '>
						<div className='col-md-1 bootstrap snippets'></div>
						<div className='col-md-10 bootstrap snippets'>
							<div className='panel'>
								<div className='panel-body'>
									<textarea
										className='form-control'
										rows={2}
										placeholder='Send comment ...'
										name='text'
										Value={coment.text}
										onChange={handleChange}
									/>
									<div className='mar-top clearfix'>
										<button
											className='btn btn-sm btn-success pull-right'
											type='submit'
											onClick={() => dispatch(addComent(coment))}
										>
											<i className='fa fa-pencil fa-fw' /> Share
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-1 bootstrap snippets'></div>
					</div>
				</div>
			</div>
			{coments
				.filter((coment) => coment.article_id === article._id)
				.map((coment) => (
					<Coments coment={coment} key={coment._id} />
				))}
		</div>
	);
};

export default Article;
