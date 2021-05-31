import React from 'react'
import { CityForm } from '../components/ToDoList/CityForm';
import { getDataCountries } from '../clients/countriesClient'
import {deleteDataCities, getDataCities, postDataCities } from '../clients/citiesClient'

export class CitiesView extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            cities: [],
            countriesFromApi: [],
            citiesFromAPI: [],
        }
    }

    updateCountriesFromAPI = (datos) => {
        this.setState({
            countriesFromApi: datos
        })
    }

    updateCitiesFromAPI = (datos) => {
        this.setState({
            citiesFromAPI: datos
        })
    }

    componentDidMount(){

        getDataCountries(this.updateCountriesFromAPI)
        getDataCities(this.updateCitiesFromAPI)

    }

    addCity = (city , countrieId) => {
        postDataCities(city, countrieId)
    }

    deleteCity = (id) =>{

        deleteDataCities(id);
    }


    render(){
        return(
            <>
                <div>
                    <CityForm addCity={this.addCity} countriesFromApi={this.state.countriesFromApi} />
                    <div className="list-countries">
                        <table>
                            <thead>
                                <tr>
                                    <th>Pais</th>
                                    <th>Ciudad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.citiesFromAPI.map(city =>
                                    <tr className="list" key={city.id}>
                                        <td>{city.countrie.name}</td>
                                        <td>{city.name}</td>
                                        <td><button onClick={() => this.deleteCity(city.id)} className="trash-btn" >
                                        <i className="fas fa-trash"></i>
                                        </button>
                                        </td>
                                    </tr>    
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}