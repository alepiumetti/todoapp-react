import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';


class Task extends Component {


    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        const {task} = this.props;
        

        return <div style={this.StyleCompleted()}> 
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input 
                type="checkbox"
                onChange={
                    this.props.checkDone.bind(this, task.id)
                }
                />
            <button 
                style={btnDelete} 
                onClick={this.props.deleteTask.bind(this,task.id)}>
                x
            </button>
        </div>
    }
}

Task.propsType = {
    task: PropTypes.object.isRequired
}

const btnDelete ={
    fontSize: '18px',
    background: '#f18179',
    color: '#abc9c',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;