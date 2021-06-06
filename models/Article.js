const mongoose = require("mongoose");
const { Schema } = mongoose;



const articleSchema = new Schema(
	{
		title: { type: String, required: true },
		categorie: { type: String, required: true },
		text_article: { type: String, required: true },
		poster_id: { type: String, required: true },
		poster_name: { type: String, required: true },
		add_to_fav_id: { type: String, default: '' },
		add_to_later_id: { type: String, default: '' },
		is_faivorite: { type: Boolean, default: false },
		is_read_later: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = Article = mongoose.model('Article', articleSchema);
