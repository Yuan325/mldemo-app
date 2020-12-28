import React from "react";

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
			<form onSubmit={this.handleSubmit}>
				<label>
					Question:
					<input type="text" value={this.state.value} name="question" onChange={this.handleChange} />
				</label>
				<label>
					Context:
					<input type="text" value={this.state.value} name="context" onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit"/>
			</form>
			
			<p>{ this.state.answer } </p>
			</div>
		);
	}
}

export default BertQA;
