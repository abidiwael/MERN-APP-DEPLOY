const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
	try {
		// req.body= name , email , password , phone
		const { email, password } = req.body;
		// test email
		const findUser = await User.findOne({ email });
		// email should be unique
		if (findUser) {
			return res
				.status(400)
				.send({ errors: [{ msg: "email should be unique" }] });
		}
		// new user
		const newUser = new User({ ...req.body });

		// hashage password
		const hashedpassword = await bcrypt.hash(password, saltRounds);
		newUser.password = hashedpassword;
		//then we save user
		await newUser.save();

		// CRRE UN TOKEN= meftaa7
		const token = jwt.sign(
			{
				id: newUser._id,
			},
			process.env.SECRET_KEY,
			{ expiresIn: "3h" }
		);
		// response
		res.status(200).send({ msg: "register succ", user: newUser, token });
	} catch (error) {
		console.log(error);
		res.status(500).send({ errors: [{ msg: "user not saved" }] });
	}
};

exports.Login = async (req, res) => {
	try {
		// email & password
		const { email, password } = req.body;
		//   test si email mawjoud
		const findUser = await User.findOne({ email });
		// ken mech mawjoud
		// bad credential
		if (!findUser) {
			return res.status(400).send({ errors: [{ msg: "bad credential" }] });
		}
		// test password
		//   password fel BD== password
		const comparePass = await bcrypt.compare(password, findUser.password);
		//   ken mech kifkif
		// bad crential
		if (!comparePass) {
			return res.status(400).send({ errors: [{ msg: "bad credential" }] });
		}
		// CREE UN TOKEN= meftaa7
		const token = jwt.sign(
			{
				id: findUser._id,
			},
			process.env.SECRET_KEY,
			{ expiresIn: "3h" }
		);
		res.status(200).send({ msg: "login successfully", user: findUser, token });
	} catch (error) {
		res.status(500).send({ errors: [{ msg: "can not login" }] });
	}
};

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).send({ msg: "All users", users }); // res dima objet
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to get users");
	}
};

exports.editUser = async (req, res) => {
	try {
		const { Id } = req.params;
		const newUser = await User.findOneAndUpdate(
			{ _id: Id },
			{ $set: { ...req.body } }
		);
		res.status(200).send({ msg: "user edited", newUser });
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to edit user");
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const { Id } = req.params;
		await User.findOneAndDelete({ _id: Id });
		res.status(200).send({ msg: "user deleted" });
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to delete user");
	}
};

exports.addUser = async (req, res) => {
	try {
		const { name, email, password, phone, role } = req.body; 

		const findUser = await User.findOne({ email });
		// email should be unique
		if (findUser) {
			return res
				.status(400)
				.send({ errors: [{ msg: "email should be unique" }] });
		}
		const newUser = new User({ ...req.body });
		const hashedpassword = await bcrypt.hash(password, saltRounds);
		newUser.password = hashedpassword;
		//save user
		await newUser.save();
		res.status(200).send({ msg: "new article is added", user: newUser }); 
	} catch (error) {
		console.log(error);
		res.status(500).send("impossible to add new user");
	}
};


