import React from 'react'
import { OrgForm } from '../components/ToDoList/OrgForm';

export class OrgView extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            orgs: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem("orgs") != null){
            this.setState({
                countries: JSON.parse(localStorage.getItem("orgs"))
            })
        }
    }

    addOrgs = (org) => {
        this.setState({
            orgs: [...this.state.orgs, org]
        })
    }

    saveData = () => {
        window.localStorage.setItem("orgs", JSON.stringify(this.state.orgs))
    }

    render(){
        return(
            <>
                <div>
                    <OrgForm addOrgs={this.addOrgs} />
                    <button onClick={this.saveData} className="save">Guardar en LS <i className="fas fa-plus-square"></i>
                    </button>
                </div>
            </>
        )
    }
}