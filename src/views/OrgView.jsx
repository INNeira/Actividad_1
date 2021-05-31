import React from 'react'
import { OrgForm } from '../components/ToDoList/OrgForm';
import { getDataCities } from '../clients/citiesClient'
import {deleteDataOrgs, getDataOrgs, postDataOrgs } from '../clients/orgsClient'
import swal from 'sweetalert';

export class OrgView extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            orgs: [],
            citiesFromAPI: [],
            orgsFromAPI: []
        }
    }

    updateCitiesFromAPI = (datos) => {
        this.setState({
            citiesFromAPI: datos
        })
    }

    updateOrgsFromAPI = (datos) => {
        this.setState({
            orgsFromAPI: datos
        })
    }

    componentDidMount(){

        getDataCities(this.updateCitiesFromAPI)
        getDataOrgs(this.updateOrgsFromAPI)

    }

    addOrgs = (org, placeId) => {
        postDataOrgs(org,placeId)
    }

    deleteOrg = (id) =>{

        if(deleteDataOrgs(id)){
            swal({
                title: "Eliminado!",
                text: "El registro se ha eliminado con exito, por favor recargue la pantalla!",
                icon: "info",
                button: "Entendido",
              });
        };
    }


    render(){
        return(
            <>
                <div>
                    <OrgForm addOrgs={this.addOrgs} citiesFromAPI={this.state.citiesFromAPI} />
                    <div className="list-countries">
                        <table>
                            <thead>
                                <tr>
                                    <th>Ciudad</th>
                                    <th>Organizacion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orgsFromAPI.map(org =>
                                    <tr className="list" key={org.id}>
                                        <td>{org.place.name}</td>
                                        <td>{org.name}</td>
                                        <td><button onClick={() => this.deleteOrg(org.id)} className="trash-btn" >
                                        <i className="fas fa-trash"></i>
                                        </button>
                                        </td>
                                    </tr>    
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}