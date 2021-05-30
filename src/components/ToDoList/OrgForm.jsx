import React from 'react'

export class OrgForm extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state ={
            org: {
                parentCity: "",
                name: "",
                id: "",
            },
            orgs: [],
            cities: []
        }
    }
    
    componentDidMount(){
        if(localStorage.getItem("orgs") != null){
            this.setState({
                orgs: JSON.parse(localStorage.getItem("orgs")),
            })
        }
        if(localStorage.getItem("cities") != null){
            this.setState({
                cities: JSON.parse(localStorage.getItem("cities")),
            })
        }
    }

    submitForm = (e) => {
        e.preventDefault();

        const newOrg = {
            parentCity: this.state.parentCity,
            org: this.state.org,
            id: 1+Math.random(),
        }

        this.props.addOrgs(newOrg);

        this.setState({
            org: {
                parentCity: "",
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

    handleSelect(e){
		e.preventDefault();
		this.setState({
			[e.target.name]: JSON.parse(e.target.value),
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
                                value={JSON.stringify(this.state.parentCity)}
                                name="parentCity"
                        >
                            <option value={JSON.stringify({})}>Select option</option>
                            {this.state.cities.map((city) => (
                                <option key={city.id} value={JSON.stringify(city)}>{city.city}</option>
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