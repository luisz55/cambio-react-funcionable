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
    
    this.setState({
      todos: this.state.todos.filder((e,i) => {
        return i !== index  
      })
  
    });
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
      <div className='col-md-4' key={i}> 
        <div className='col-mt-4'>
          <div className='card-decks'>
            <div className='card mt-4'>
              <div className='card-header'>
                <h3> {todo.title} </h3>
              
                <span className='badge badge-pill badge-danger ml-2'>
                  {todo.priority}
                </span>
              </div>
              <div className='card-body'>
                <p> {todo.Description } </p>
                <p> {todo.responsible} </p>
              <div className='card-footer'>
                <button className='btn btn-danger' onClick={this.removeTodo.bind(this, i)}>
                  Eliminar
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  });

// datos de para las cards extraidas de 'todos.json' //  

    return (
      <div className="App"> 
        <nav className='container navbar navbar-dark bg-dark '>
          <a href="#" className="text-white">
            Tareas
            <span className='badge badge-pill badge-light ml-2'>
              { this.state.todos.length }
            </span>
          </a>  
            <img src={logo} className="App-logo  d-flex justify-content-end " alt="logo"  />
                   
        </nav>
        <div className='container'>
          <div className='row md-4'>
            <div className='col-md-4 text-center'>
              <TodoForm  onAddTodo = { this.agregaUnaTarea }></TodoForm>
            </div>            
            {todos}
          </div>
        </div>
    
       
      </div>  
    );
  }
}

export default App;
 