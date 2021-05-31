import React from 'react'

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

        if((this.state.country.name).trim() === ""){
            alert("Estas mandando los datos vacios!!")
        }else{
            e.preventDefault();

            this.props.addCountry(this.state.country.name);

            this.setState({
                country: {
                    name: ""  
                }
            })
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