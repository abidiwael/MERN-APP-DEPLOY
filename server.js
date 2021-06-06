//clear console
console.clear();
// import express
const express = require("express");
const connectDB = require("./config/connectDB");
const path = require("path");
// instance app
const app = express();
require("dotenv").config();
connectDB();
// router
app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/comments", require("./router/comment"));
app.use("/api/articles", require("./router/article"));

// serv static assets if in production
if (process.env.NODE_ENV === "production") {
	//set static folder
	app.use(express.static("client/build"));
  
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// PORT
const PORT = process.env.PORT;
// create server
app.listen(PORT, (err) =>
	err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
//
//
