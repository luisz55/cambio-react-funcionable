import React, { Component } from 'react';



class TodoForm extends Component {
    constructor (){
        super ();
        this.state = {
            title :'',
            responsible:'',
            Description :'',
            priority :'low'
        };


    // Enlaces // 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   
    }

    // Enlazando  //
       
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title :'',
            responsible:'',
            Description :'',
            priority :'low'

        });  
        
    }

    handleInputChange(e){
        const {value, name } = e.target;
        console.log (value, name);
        this.setState({
            [name]:value

        });
    }

    // formulario //  

    render () {   
        return (
            <div className = 'card mt-4'>
                <form className='card-body' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input 
                            type ='text'
                            name='title'
                            className='form-control'
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder='Title'
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type ='text'
                            name='responsible'
                            className='form-control'
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            placeholder='Responsible'
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type ='text'
                            name='Description'
                            className='form-control'
                            value={this.state.Description}
                            onChange={this.handleInputChange}
                            placeholder='Description'

                        />
                    </div>
                    <div className='form-group'>
                        <select name='priority' className='form-control'  type ='text'
                            name='priority'
                            className='form-control'
                            placeholder='priority'
                            value={this.state.priority}
                            onChange={this.handleInputChange}>
                            
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" >
                        Agregar
                    </button>
                </form>
            </div> 
                    
        )

    }
    
}

export default TodoForm; 