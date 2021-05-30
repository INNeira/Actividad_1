import React from 'react';
import { List } from './List'


export class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            tasks: [],
            inputValue: "",
            org: "",
            city: "",
            country: "",
            countries: [],
            idCountry: "",
            cities: [],
            orgs: [],
        }
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount(){
        if(localStorage.getItem("countries") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("countries")),
            })
        }
        if(localStorage.getItem("cities") != null){
            this.setState({
                cities: JSON.parse(localStorage.getItem("cities"))
            })
        }
        if(localStorage.getItem("orgs") != null){
            this.setState({
                orgs: JSON.parse(localStorage.getItem("orgs"))
            })
        }
    }
    
    handleInput(eventA){
        this.setState({
            inputValue: eventA.target.value,
        })
    }

    handleInputB(eventB){
        this.setState({
            org: eventB.target.value,
        })
    }

    handleInputC(eventC){
        this.setState({
            city: eventC.target.value,
        })
    }

    handleInputD(eventD){
        this.setState({
            country: eventD.target.value,
        })
    }

    addTask(){

        function isObjEmpty(obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) return false;
            }
          
            return true;
        }

        if(this.state.inputValue.trim() === '' || isObjEmpty(this.state.org) || isObjEmpty(this.state.city) || isObjEmpty(this.state.country)){
            alert('Estas mandando los campos vacios')
        }else{

            const newItem = {
                id: 1+Math.random(),
                job: this.state.inputValue,
                country:  this.state.country.country,
                city: this.state.city.city,
                org: this.state.org.org, 
            }
    
            const tasks = [...this.state.tasks];
    
            tasks.push(newItem);

            this.setState({
                tasks,
                inputValue: "",
                org: "",
                city: "",
                country: "",
            })
        } 
    }

    
    deleteItem(id){
        const tasks = [...this.state.tasks]

        const upadtedList = tasks.filter(item => item.id !== id)

        this.setState({tasks: upadtedList});
    }
    
    handleSelect(e){
		e.preventDefault();

        this.setState({
            [e.target.name]: JSON.parse(e.target.value),
        });
	};


    render(){
        return(
            <>
                <div className="form-todo">
                    <label> Puesto </label>
                    <input value={this.state.inputValue} onChange={(eventA) => this.handleInput(eventA)} type="text" />
                    <label> Pais </label>
                    <select className="form-select" id="inputGroupSelect01"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.cities.parentCountry)}
                            name="country"
                    >
                        <option value={JSON.stringify({})}>Select option</option>
                        {
                        this.state.countries.map((country) => (
                            <option key={country.id} value={JSON.stringify(country)}>{country.country}</option>
                        ))}
                    </select>
                    <label> Ciudad </label>
                    <select className="form-select" id="inputGroupSelect02"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.city)}
                            name="city"
                    >
                        <option value={JSON.stringify({})}>Select option</option>
                        {this.state.cities.map((city) => city.parentCountry.id === this.state.country.id ? <option key={city.id} value={JSON.stringify(city)}>{city.city}</option> : JSON.stringify({}))}
                    </select>
                    <label> Empresa </label>
                    <select className="form-select" id="inputGroupSelect03"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.org)}
                            name="org"
                    >
                        <option value={JSON.stringify({})}>Select option</option>
                        {this.state.orgs.map((org) => org.parentCity.parentCountry.id === this.state.country.id && org.parentCity.id === this.state.city.id ? <option key={org.id} value={JSON.stringify(org)}>{org.org}</option> : JSON.stringify({}))}
                    </select>
                    <button onClick={() => this.addTask(this.state.inputValue,this.state.org,this.state.city,this.state.country)}>Agregar <i className="fas fa-plus-square"></i>
                    </button>
                </div>
                <div className="todo-container">
                    <table>
                        <thead>
                            <tr>
                                <th className="thead">Puesto</th>
                                <th className="thead">Empresa</th>
                                <th className="thead">Ciudad</th>
                                <th className="thead">País</th>
                                <th className="thead">Acciones</th>
                            </tr>
                        </thead>
                        
                        <tbody className="todo-list">
                                {this.state.tasks.map(task =>(
                                <List tasks={this.state.tasks} task={task} key={task.id} id={task.id} job={task.job} org={task.org} city={task.city} country={task.country} delete={this.deleteItem}/>
                                ))}
                        </tbody>
                    </table>
                </div>
          </>
        )
    }
}