import "./App.css";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import UserList from "./Components/UserList/UserList";
import FavList from "./Components/FavList/FavList";
import ReadList from "./Components/ReadList/ReadList";
import About from "./Components/About/About";
// import PrivateRouteAdmin from "./router/PrivateRouteAdmin";
function App() {
	const [searchTitle, setSearchTitle] = useState("");
	const getSearchTitle = (input) => {
		setSearchTitle(input);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(current());
	}, []);
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landpage} />
				<Route
					exact
					path='/home'
					render={(props) => (
						<Home
							searchTitle={searchTitle}
							getSearchTitle={getSearchTitle}
							{...props}
						/>
					)}
				/>
				<PrivateRoute exact path='/users' component={UserList} />
				<PrivateRoute exact path='/favorites' component={FavList} />
				<PrivateRoute exact path='/read_later' component={ReadList} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login} />
				<PrivateRoute path='/profile' component={Profile} />
				<Route path='/about' component={About} />
				<Route path='/*' component={Errors} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
