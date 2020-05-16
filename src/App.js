import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
// import Card from './components/Card';

class App extends React.Component {
	render() {
		return (
			<div style = {{margin : '30px'}}>
				<Intro />
			</div>
		);
	}
}
export default App;
