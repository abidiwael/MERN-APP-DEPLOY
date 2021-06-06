const express = require("express");
const {
	Register,
	Login,
	getAllUsers,
	editUser,
	deleteUser,
	getOne,
	addUser,
} = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
	validation,
	registerValidate,
	loginValidate,
} = require("../middleware/validateUser");

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/", addUser);
router.put("/edit_user/:Id", editUser);
router.delete("/delete_user/:Id", deleteUser);
router.post("/register", registerValidate(), validation, Register);
router.post("/login", loginValidate(), validation, Login);
router.get("/current", isAuth, (req, res) => {
	res.send({ msg: "authorized", user: req.user });
});

// default export
module.exports = router;


