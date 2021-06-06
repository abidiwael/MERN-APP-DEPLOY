const express = require("express");
const { addComment, getComment, editComment, deleteComment } = require("../controllers/comment.controllers");
const router = express.Router();




router.post("/add", addComment);
router.get("/", getComment);
router.put("/:Id", editComment);
router.delete("/:Id", deleteComment);

module.exports = router;
