const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
	try {
		const { text, article_id, user_name, user_id } = req.body;
		if (!text) {
			return res.status(400).send("Can't add a empty comment");
		}
		const newComment = new Comment({ ...req.body });
		await newComment.save();
		res.status(200).send({ msg: "new Comment is added", comment: newComment });
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to add newComment");
	}
};

exports.getComment = async (req, res) => {
	try {
		const coments = await Comment.find().populate("comments");
		res.status(200).send({ msg: "All comments", coments }); // res dima objet
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to get comments");
	}
};

exports.editComment = async (req, res) => {
	try {
		const { Id } = req.params;
		const newComment = await Comment.findOneAndUpdate(
			{ _id: Id },
			{ $set: { ...req.body } }
		);
		res.status(200).send({ msg: "Comment edited", newComment });
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to edit comment");
	}
};

exports.deleteComment = async (req, res) => {
	try {
		const { Id } = req.params;
		await Comment.findOneAndDelete({ _id: Id });
		res.status(200).send({ msg: "Comment deleted" });
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to delete comment");
	}
};
