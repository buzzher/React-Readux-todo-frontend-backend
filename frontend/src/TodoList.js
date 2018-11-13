import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo, getTodos } from './actionCreators';
import { Route } from 'react-router-dom';

class TodoList extends Component{
	constructor(props){
		super(props);
		// this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	componentDidMount(){
		this.props.getTodos();
	}

	handleAdd(val){
		this.props.addTodo(val)
	}

	handleRemove(id){
		this.props.removeTodo(id)
	}

	render(){
		// debugger;
		let todos = this.props.todos.map(todo =>(
			<Todo
				task={todo.task}
				key={todo._id}
				removeTodo={this.handleRemove.bind(this, todo._id)}
			/>
		));

		return(
			<div className=''>
			
				<Route exact path='/todos'
					component={() =>
						<div className=''>{todos}</div>
					}
				/>
				<Route path='/todos/new' component={props =>(
						<NewTodoForm {...props} handleSubmit={this.handleAdd} />
					)}
				/>
			</div>
		)
	}
}

function mapStateToProps(reduxState){
	// debugger;
	return{
		todos: reduxState.todos
	}
}

export default connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList);