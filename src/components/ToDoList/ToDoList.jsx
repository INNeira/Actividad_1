import React from 'react';
import { List } from './List'


export class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            tasks: [],
            inputValue: "",
            inputValue2: "",
            inputValue3: "",
            inputValue4: "",
        }
        this.deleteItem = this.deleteItem.bind(this)
    }
    
    handleInput(a){
        this.setState({
            inputValue: a.target.value,
        })
    }

    handleInputB(b){
        this.setState({
            inputValue2: b.target.value,
        })
    }

    handleInputC(c){
        this.setState({
            inputValue3: c.target.value,
        })
    }

    handleInputD(d){
        this.setState({
            inputValue4: d.target.value,
        })
    }

    addTask(){

        const newItem = {
            id: 1+Math.random(),
            job: this.state.inputValue,
            org: this.state.inputValue2,
            city: this.state.inputValue3,
            country: this.state.inputValue4 
        }

        const tasks = [...this.state.tasks];

        tasks.push(newItem);

        if(this.state.inputValue.trim() === '' || this.state.inputValue2.trim() === '' || this.state.inputValue3.trim() === '' || this.state.inputValue4.trim() === ''){
            alert('Estas mandando los campos vacios')
        }else{
            this.setState({
                tasks,
                inputValue: "",
                inputValue2: "",
                inputValue3: "",
                inputValue4: ""
            })
        } 
    }

    
    deleteItem(id){
        const tasks = [...this.state.tasks]

        const upadtedList = tasks.filter(item => item.id !== id)

        this.setState({tasks: upadtedList});
    }

    render(){
        return(
            <>
                <div className="form-todo">
                    <label> Puesto </label>
                    <input value={this.state.inputValue} onChange={(a) => this.handleInput(a)} type="text" />
                    <label> Empresa </label>
                    <input value={this.state.inputValue2} onChange={(b) => this.handleInputB(b)} type="text" />
                    <label> Ciudad </label>
                    <input value={this.state.inputValue3} onChange={(c) => this.handleInputC(c)} type="text" />
                    <label> Pais </label>
                    <input value={this.state.inputValue4} onChange={(d) => this.handleInputD(d)} type="text" />
                    <button onClick={() => this.addTask(this.state.inputValue,this.state.inputValue2,this.state.inputValue3,this.state.inputValue4)}>Agregar <i className="fas fa-plus-square"></i>
                    </button>
                </div>
                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.tasks.map(task =>(
                            <List tasks={this.state.tasks} task={task} key={task.id} id={task.id} job={task.job} org={task.org} city={task.city} country={task.country} delete={this.deleteItem}/>
                        ))}
                    </ul>
                </div>
          </>
        )
    }
}