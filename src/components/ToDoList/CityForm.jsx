import React from 'react'
import swal from 'sweetalert';

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

        e.preventDefault()

        if((this.state.city.name).trim() === "" || (this.state.city.countrieId) === ""){
            swal({
                title: "Error",
                text: "Datos vacios, por favor verifique de rellenar todos los campos.",
                icon: "error",
                button: "Entendido",
              });
        }else{
            e.preventDefault();

            this.props.addCity(this.state.city.name, this.state.city.countrieId);

            this.setState({
                city: {
                    name: "",
                    countrieId: ""
                }
            })

            swal({
                title: "Exito!",
                text: "El registro se completo con exito, por favor recargue la pantalla!",
                icon: "success",
                button: "Entendido",
              });
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