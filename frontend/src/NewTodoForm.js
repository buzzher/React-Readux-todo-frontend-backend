import React, {Component} from 'react';

class NewTodoForm extends Component{
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			task: ''
		}
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.handleSubmit(this.state.task)
		e.target.reset();
		this.props.history.push('/todos')
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render(){

		return(
			<div className=''>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='task'>Task</label>
					<input
						type='text'
						name='task'
						id='task'
						placeholder='type todo'
						onChange={this.handleChange}
					/>
					<button>Add a Todo!</button>
				</form>
			</div>
		)
	}
}

export default NewTodoForm;