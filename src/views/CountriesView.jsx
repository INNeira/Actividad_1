import React from 'react'
import { CountryFrom } from '../components/ToDoList/CountryForm';
import {getDataCountries,postDataCountries, deleteDataCountries} from '../clients/countriesClient'

export class CountriesView extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            countries: [],
            countriesFromApi: []
        }
    }

    updateCountriesFromAPI = (datos) => {
        this.setState({
            countriesFromApi: datos
        })
    }

    componentDidMount(){

        getDataCountries(this.updateCountriesFromAPI)

    }

    addCountry = (country) => {
        postDataCountries(country)
    }

    deleteCountry = (id) =>{

        deleteDataCountries(id);
    }


    render(){
        return(
            <>
                <div>
                    <CountryFrom addCountry={this.addCountry} />
                    <div className="list-countries">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.countriesFromApi.map(country =>
                                    <tr className="list" key={country.id}>
                                        <td>{country.name}</td>
                                        <td><button onClick={() => this.deleteCountry(country.id)} className="trash-btn" >
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