import React from 'react'

export class CityForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            city: {
                parentCountry: "",
                name: "",
                id: "",
            },
            cities: [],
            countries: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("cities") != null){
            this.setState({
                cities: JSON.parse(localStorage.getItem("cities")),
            })
        }
        if(localStorage.getItem("countries") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("countries")),
            })
        }
    }
    
    submitForm = (e) => {
        e.preventDefault();

        const newCity = {
            parentCountry: this.state.parentCountry,
            city: this.state.city,
            id: 1+Math.random(),
        }

        this.props.addCity(newCity);

        this.setState({
            city: {
                parentCountry: "",
                name: "",
                id: ""
            }
        })
    };

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: JSON.parse(e.target.value),
		});
	};


    render(){
        return(
            <>
            <form onSubmit={(e) => this.submitForm(e)}>
                <div className="form-todo">
                    <label> Nombre de la Ciudad</label>
                    <input name="city" placeholder="Ciudad" value={this.state.city.name} onChange={(e) => this.handleInput(e)} type="text" />
                    <div className="general-divs">
                    <label> Pais </label>
                        <select className="form-select" id="inputGroupSelect01"
                                onChange={(e) => this.handleSelect(e)}
                                value={JSON.stringify(this.state.parentCountry)}
                                name="parentCountry"
                        >
                            <option value={JSON.stringify({})}>Select option</option>
                            {this.state.countries.map((country) => (
                                <option key={country.id} value={JSON.stringify(country)}>{country.country}</option>
                            ))}
                        </select>
                    </div>
                    <button className="general-buttons" type="submit">Agregar <i className="fas fa-plus-square"></i>
                    </button>
                </div>
            </form>
            </>
        )
    }
}