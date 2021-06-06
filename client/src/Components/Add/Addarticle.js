import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import "./Addarticle.css";
import { addArticle } from "../../Redux/actions/article";
import Article from "../Article/Article";

const Add = ({ getSearchTitle }) => {
	// const articles = useSelector((state) => state.articleReducer.articles);

	const user = useSelector((state) => state.userReducer.user);

	const [article, setArticle] = useState({
		title: "",
		text_article: "",
		categorie: "",
	});
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setArticle({
			...article,
			[e.target.name]: e.target.value,
			poster_id: user._id,
			poster_name: user.name,
		});
	};
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className='bodyadd'>
			<div className='row'>
				<div className='col-lg-8'>
					<div className='searchbarposition'>
						<div className='d-flex justify-content-center h-100'>
							<div className='search'>
								<input
									type='text'
									className='search-input'
									placeholder='search...'
									onChange={(e) => getSearchTitle(e.target.value)}
								/>
								<a href='#' className='search-icon'>
									<i className='fa fa-search' />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='col-lg-2'>
					<Button className='btn_add' variant='primary' onClick={handleShow}>
						New article
					</Button>
				</div>
			</div>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New Article</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<InputGroup size='sm' className='mb-3'>
						<FormControl
							aria-label='Small'
							aria-describedby='inputGroup-sizing-sm'
							placeholder='Article title'
							name='title'
							value={article.title}
							onChange={handleChange}
						/>
					</InputGroup>
					<InputGroup>
						<FormControl
							as='textarea'
							aria-label='With textarea'
							placeholder='Article content'
							name='text_article'
							value={article.text_article}
							onChange={handleChange}
						/>
					</InputGroup>
					<br />
					<Form>
						<Form.Group controlId='exampleForm.SelectCustom'>
							<Form.Control
								as='select'
								name='categorie'
								value={article.categorie}
								onChange={handleChange}
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
							dispatch(addArticle(article));
							handleClose();
						}}
					>
						Understood
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Add;
