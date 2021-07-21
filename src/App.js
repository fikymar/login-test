import "./utils/scss/App.css";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
			{/* <Home /> */}
		</div>
	);
}

export default App;
