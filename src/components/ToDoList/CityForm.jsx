import React from 'react'

export class CityForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            city: {
                name: "",
                countrieId: ""
            },
            cities: [],
            countries: []
        }
    }

    
    submitForm = (e) => {

        if((this.state.city.name).trim() === "" || (this.state.city.countrieId).trim() === ""){
            alert("Datos VACIOS!!")
        }else{
            e.preventDefault();

            this.props.addCity(this.state.city.name, this.state.city.countrieId);

            this.setState({
                city: {
                    name: "",
                    countrieId: ""
                }
            })
        }
    };

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]:{
                name : e.target.value,
                countrieId: ""
            },
        });
    };

    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: {
                name: this.state.city.name,
                countrieId: JSON.parse(e.target.value)
            }
    
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
                                value={JSON.stringify(this.state.city.countrieId)}
                                name="city"
                        >
                            <option value={JSON.stringify({})}>Select option</option>
                            {this.props.countriesFromApi.map((country) => (
                                <option key={country.id} value={JSON.stringify(country.id)}>{country.name}</option>
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