import React from 'react'
import swal from 'sweetalert';

export class CountryFrom extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            country: {
                name: ""
            }
        }
    }
    
    submitForm = (e) => {

        e.preventDefault()

        if((this.state.country.name).trim() === ""){
            swal({
                title: "Error",
                text: "Datos vacios, por favor verifique de rellenar todos los campos.",
                icon: "error",
                button: "Entendido",
              });
        }else{
            e.preventDefault();

            this.props.addCountry(this.state.country.name);

            this.setState({
                country: {
                    name: ""  
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
                name : e.target.value
            } 
        });
    };


    render(){
        return(
            <>
            <form onSubmit={(e) => this.submitForm(e)}>
                <div className="form-todo">
                    <label> Nombre del pais </label>
                    <input name="country" placeholder="Pais" value={this.state.country.name} onChange={(e) => this.handleInput(e)} type="text" />
                    <button type="submit">Agregar <i className="fas fa-plus-square"></i>
                    </button>
                </div>
            </form>
            </>
        )
    }
}