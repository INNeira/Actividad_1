import React from 'react'

export class CountryFrom extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            country: {
                name: "",
                id: "",
            }
        }
    }
    
    submitForm = (e) => {
        e.preventDefault();

        const newCountry = {
            country: this.state.country,
            id: 1+Math.random(),
        }

        this.props.addCountry(newCountry);

        this.setState({
            country: {
                name: "",
                id: ""
            }
        })
    };

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
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