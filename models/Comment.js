const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema(
	{
		text: { type: String, required: true },
		article_id: { type: String, required: true },
		user_name: { type: String, required: true },
		user_id: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = Comment = mongoose.model('Comment', commentSchema);
