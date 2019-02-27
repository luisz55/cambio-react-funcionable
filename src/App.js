import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json'; 

import TodoForm from './componentes/TodoForm';



class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }

    this.agregaUnaTarea = this.agregaUnaTarea.bind(this);   

  }

  //eliminar card//

  removeTodo(index){
    if (window.confirm ('Quieres eliminar esta tarea ?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index  
        })
      });
    }
  }


  // metodo encargado de agrgar nuevos datos a las tareas //

  agregaUnaTarea(todo) {
    console.log(todo);
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  // encargado de agregar  nuevos datos a las tareas //  

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center pt-2">
            <h3>{todo.title}</h3>
            </div>
            <div>{todo.responsible}</div>
            
              <div className='card-body tect-center'>
                
                <span className=" badge badge-pill badge-danger ml-2 text-center p-2">
                  {todo.priority}
                </span>
              </div>           
            
            <div className="card-body">
              {todo.Description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    });

    // return el componente //  

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>  
          </a>
          <div className='d-flex justify-contnet-end '><img src={logo} className="App-logo " alt="logo" /></div>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                
              <TodoForm onAddTodo={this.agregaUnaTarea}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
 