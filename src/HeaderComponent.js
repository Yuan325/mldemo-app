import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import './HeaderComponent.css';

function Header() {
	const home=() => {
		return (
			<Toolbar>
				{mldemoLogo}
			</Toolbar>
		)
	};

	const mldemoLogo = (
		<Typography variant="h6" component="h1" className="logo">
			MLDemo
		</Typography>
	);

	return(
		<header>
			<AppBar className="header" >{home()}</AppBar>
		</header>
	);
}

export default Header;

//https://medium.com/better-programming/building-a-basic-header-with-materialui-and-react-js-d650f75b4b0a
