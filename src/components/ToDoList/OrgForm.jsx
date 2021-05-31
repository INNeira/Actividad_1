import React from 'react'
import swal from 'sweetalert';

export class OrgForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            org: {
                name: "",
                placeId: ""
            },
            orgs: [],
            cities: []
        }
    }
    

    submitForm = (e) => {
        e.preventDefault()

        if((this.state.org.name).trim() === "" || (this.state.org.placeId) === ""){
            swal({
                title: "Error",
                text: "Datos vacios, por favor verifique de rellenar todos los campos.",
                icon: "error",
                button: "Entendido",
              });
        }else{
            e.preventDefault();

            this.props.addOrgs(this.state.org.name, this.state.org.placeId);

            this.setState({
                org: {
                    name: "",
                    placeId: ""
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
                placeId: ""
            },
        });
    };

    handleSelect(e){
		e.preventDefault();
		this.setState({
			...this.state,
			[e.target.name]: {
                name: this.state.org.name,
                placeId: JSON.parse(e.target.value)
            }
		});
	};


    render(){
        return(
            <>
            <form onSubmit={(e) => this.submitForm(e)}>
                <div className="form-todo">
                    <label> Nombre de la Empresa</label>
                    <input name="org" placeholder="Empresa" value={this.state.org.name} onChange={(e) => this.handleInput(e)} type="text" />
                    <div className="general-divs">
                    <label> Ciudad </label>
                        <select className="form-select" id="inputGroupSelect02"
                                onChange={(e) => this.handleSelect(e)}
                                value={JSON.stringify(this.state.org.placeId)}
                                name="org"
                        >
                            <option value={JSON.stringify({})}>Select option</option>
                            {this.props.citiesFromAPI.map((city) => (
                                <option key={city.id} value={JSON.stringify(city.id)}>{city.name}</option>
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