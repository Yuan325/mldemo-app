import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './HomeComponent';
import BertQA from './BertQAComponent';

function Main() {
	return (
		<Router>
			<Routes />
		</Router>
	);
}

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/bertqa" component={BertQA} />
		</Switch>
	);
};

export default Main;
