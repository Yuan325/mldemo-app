import React from "react";
import './BertQAComponent.css';

class BertQA extends React.Component{
	constructor(props){
		super(props);
		this.state = { question: "", context: "", answer: "" };
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		this.setState({answer: "running...."});
		await fetch('https://mldemo-backend.herokuapp.com/bertqa', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(this.state)
		})
		.then(response => response.json())
		.then(data =>{
			this.setState({answer: data['answer']});
		});
	}

	render(){
		return (
			<div>
			<div className="modelTitle">
			BERT: Question Answering System
			</div>
			<div className="form">
			<form onSubmit={this.handleSubmit}>
				<label className="formLabel">Question:</label>
				<input className="formInput" type="text" value={this.state.value} name="question" placeholder="Place your question here.."  onChange={this.handleChange} />
			<br />
				<label className="formLabel">Context:</label> 
				<input className="formInput" type="text" value={this.state.value} name="context" placeholder="Place your context here.." onChange={this.handleChange} />
				<input className="formBtn" type="submit" value="Submit"/>
			</form>
			<label className="formLabel">Answer: </label>
			<div className="modelResp">	
			{ this.state.answer }
			</div>
			</div>
			</div>
		);
	}
}

export default BertQA;
