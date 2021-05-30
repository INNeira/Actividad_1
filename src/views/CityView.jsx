import React from 'react'
import { CityForm } from '../components/ToDoList/CityForm';

export class CitiesView extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            cities: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("cities") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("cities"))
            })
        }
    }

    addCity = (city) => {
        this.setState({
            cities: [...this.state.cities, city]
        })
    }

    saveData = () => {
        window.localStorage.setItem("cities", JSON.stringify(this.state.cities))
    }

    render(){
        return(
            <>
                <div>
                    <CityForm addCity={this.addCity} countries={this.state.countries} />
                    <button onClick={this.saveData} className="save">Guardar en LS <i className="fas fa-plus-square"></i>
                    </button>
                </div>
            </>
        )
    }
}