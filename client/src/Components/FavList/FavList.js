import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Article from "../Article/Article";
import { useDispatch } from "react-redux";
import { getArticles } from "../../Redux/actions/article";
import { getComents } from "../../Redux/actions/coment";

const FavList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getArticles());
		dispatch(getComents());
	}, []);
	const user = useSelector((state) => state.userReducer.user);
	const articles = useSelector((state) => state.articleReducer.articles);
	return (
		<div>
			{articles
				.filter(
					(article) =>
						article.is_faivorite === true && article.poster_id === user._id
				)
				.map((article) => (
					<Article article={article} key={article._id} />
				))}
		</div>
	);
};

export default FavList;
