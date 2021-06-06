import React, { useEffect } from "react";
import Add from "../../Components/Add/Addarticle";
import ArticleList from "../../Components/ArticleList/ArticleList";
import { getArticles } from "../../Redux/actions/article";
import { getComents } from "../../Redux/actions/coment";
import { useDispatch } from "react-redux";

const Home = ({ getSearchTitle ,searchTitle}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getArticles());
		dispatch(getComents());
	}, []);
	return (
		<div>
			<Add getSearchTitle={getSearchTitle} />
			<ArticleList searchTitle={searchTitle} />
		</div>
	);
};

export default Home;
