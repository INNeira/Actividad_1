import React from 'react'
import { CountryFrom } from '../components/ToDoList/CountryForm';

export class CountriesView extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("countries") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("countries"))
            })
        }
    }

    addCountry = (country) => {
        this.setState({
            countries: [...this.state.countries, country]
        })
    }

    saveData = () => {
        window.localStorage.setItem("countries", JSON.stringify(this.state.countries))
    }

    render(){
        return(
            <>
                <div>
                    <CountryFrom addCountry={this.addCountry} />
                    <button onClick={this.saveData} className="save">Guardar en LS <i className="fas fa-plus-square"></i>
                    </button>
                </div>
            </>
        )
    }
}