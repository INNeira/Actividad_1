import React from 'react'
import swal from 'sweetalert';

export class JobForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            job: {
                position: "",
                description: "",
                organizationId: ""
            },
            jobs: [],
            orgs: []
        }
    }

    
    submitForm = (e) => {

        e.preventDefault()

        if((this.state.job.position).trim() === "" || (this.state.job.description).trim() === "" || (this.state.job.organizationId) === ""){
            swal({
                title: "Error",
                text: "Datos vacios, por favor verifique de rellenar todos los campos.",
                icon: "error",
                button: "Entendido",
              });
        }else{
            e.preventDefault();

            this.props.addJob(this.state.job.position, this.state.job.description, this.state.job.organizationId);

            this.setState({
                job: {
                    position: "",
                    description: "",
                    organizationId: ""
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

    handleInputPosition = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]:{
                position : e.target.value
            },
        });
    };

    handleInputDesc = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]:{
                position : this.state.job.position,
                description: e.target.value
            },
        })
    }

    handleSelect(e){
		e.preventDefault();
		this.setState({
            ...this.state,
			[e.target.name]: {
                position: this.state.job.position,
                description: this.state.job.description,
                organizationId: JSON.parse(e.target.value)
            }
    
		});
	};


    render(){
        return(
            <>
            <form onSubmit={(e) => this.submitForm(e)}>
                <div className="form-todo">
                    <label> Posición </label>
                    <input name="job" placeholder="Posicion" value={this.state.job.position} onChange={(e) => this.handleInputPosition(e)} type="text" />
                    <input name="job" placeholder="Descripcion" value={this.state.job.description} onChange={(e) => this.handleInputDesc(e)} type="text" />
                    <div className="general-divs">
                    <label> Empresa </label>
                        <select className="form-select" id="inputGroupSelect05"
                                onChange={(e) => this.handleSelect(e)}
                                value={JSON.stringify(this.state.job.organizationId)}
                                name="job"
                        >
                            <option value={JSON.stringify({})}>Select option</option>
                            {this.props.orgsFromAPI.map((org) => (
                                <option key={org.id} value={JSON.stringify(org.id)}>{org.name}</option>
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