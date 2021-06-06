import React from "react";
import { useSelector } from "react-redux";
import Article from "../Article/Article";

const ArticleList = ({ searchTitle }) => {
	const articles = useSelector((state) => state.articleReducer.articles);
	return (
		<div>
			{articles
				.filter((article) =>
					article.title.toLowerCase().includes(searchTitle.toLowerCase())
				)
				.map((article) => (
					<Article article={article} key={article._id} />
				))}
		</div>
	);
};

export default ArticleList;
