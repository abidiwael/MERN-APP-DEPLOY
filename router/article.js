const express = require("express");
const {
	addArticle,
	getArticle,
	editArticle,
	deleteArticle,
	addFav,
	addReadLater,
	getOneArticle,
	removeReadLater,
	removeFav,
} = require("../controllers/article.controllers");
const router = express.Router();

router.post("/add_article", addArticle);
router.get("/", getArticle);
router.get("/one_article/:Id", getOneArticle);
router.put("/edit_article/:Id", editArticle);
router.delete("/:Id", deleteArticle);
router.put("/add_to_fav/:Id", addFav);
router.put("/add_to_read/:Id", addReadLater);
router.put("/del_fav/:Id", removeFav);
router.put("/del_read/:Id", removeReadLater);
module.exports = router;

