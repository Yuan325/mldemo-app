import React from "react";
import './HomeComponent.css';
import { Link } from "react-router-dom";

const Box1 = () => {
	return(
	<div className="box">
		<div className="boxtext">
			Pick A Model:
			<br />
			<br /><Link to="/bertqa">BERT Question Answering System</Link>
		</div>
	</div>
	);
};

function Home(){
	return(
		<div >
		<Box1 />
		</div>
	);
}

export default Home;
