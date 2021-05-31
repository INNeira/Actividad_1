import React from 'react';
import { List } from './List'
import { getData } from '../../clients/jobClient'
import { getDataCountries } from '../../clients/countriesClient'
import { getDataCities } from '../../clients/citiesClient'
import { getDataOrgs } from '../../clients/orgsClient'

export class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            tasks: [],
            withError: false,
            inputValue: "",
            org: "",
            city: "",
            country: "",
            idCountry: "",
            countriesFromAPI: [],
            jobsFromAPI: [],
            citiesFromAPI: [],
            orgsFromAPI: []
        }
        this.deleteItem = this.deleteItem.bind(this)
    }

    getJobsFromAPI = (datos) => {
        this.setState({
            jobsFromAPI: datos
        })
    }

    getCountriesFromAPI = (datos) => {
        this.setState({
            countriesFromAPI: datos
        })
    }

    getCitiesFromAPI = (datos) => {
        this.setState({
            citiesFromAPI: datos
        })
    }

    getOrgsFromAPI = (datos) => {
        this.setState({
            orgsFromAPI: datos
        })
    }


    componentDidMount(){

        //postData('Dev','Desarrollador',10)

        getData(this.getJobsFromAPI)

        getDataCountries(this.getCountriesFromAPI)

        getDataCities(this.getCitiesFromAPI)

        getDataOrgs(this.getOrgsFromAPI)

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

        if(isObjEmpty(this.state.inputValue) || isObjEmpty(this.state.org) || isObjEmpty(this.state.city) || isObjEmpty(this.state.country)){
            alert('Estas mandando los campos vacios')
        }else{

            const newItem = {
                id: 1+Math.random(),
                job: this.state.inputValue.description,
                country:  this.state.country.name,
                city: this.state.city.name,
                org: this.state.org.name, 
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
                    {this.state.withError && <p>Hubo un error al conectarse con la API Rest</p>}
                    <label> Pais </label>
                    <select className="form-select" id="inputGroupSelect01"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.country)}
                            name="country"
                    >
                        <option value={JSON.stringify({})}>Select option</option>
                        {
                        this.state.countriesFromAPI.map((country) => (
                            <option key={country.id} value={JSON.stringify(country)}>{country.name}</option>
                        ))}
                    </select>
                    <label> Ciudad </label>
                    <select className="form-select" id="inputGroupSelect02"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.city)}
                            name="city"
                    >
                        <option value={JSON.stringify({})}>Select option</option>
                        {this.state.citiesFromAPI.map((city) => city.countrie.id === this.state.country.id ? <option key={city.id} value={JSON.stringify(city)}>{city.name}</option> : JSON.stringify({}))}
                    </select>
                    <label> Empresa </label>
                    <select className="form-select" id="inputGroupSelect03"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.org)}
                            name="org"
                    >
                        <option value={JSON.stringify({})}>Select option</option>
                        {this.state.orgsFromAPI.map((org) => org.place.countrieId == this.state.country.id && org.placeId == this.state.city.id ? <option key={org.id} value={JSON.stringify(org)}>{org.name}</option> : JSON.stringify({}))}
                    </select>
                    <label> Puesto </label>
                    <select className="form-select" id="inputGroupSelect01"
                            onChange={(e) => this.handleSelect(e)}
                            value={JSON.stringify(this.state.inputValue)}
                            name="inputValue"
                    >
                        <option value={JSON.stringify({})}>Select option</option>
                        {this.state.jobsFromAPI.map((job) => (job.organizationId == this.state.org.id && job.organization.placeId == this.state.city.id ? <option key={job.id} value={JSON.stringify(job)}>{job.description}</option> : JSON.stringify({})))}
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