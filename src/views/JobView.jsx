import React from 'react'
import { JobForm } from '../components/ToDoList/JobForm';
import { getDataOrgs } from '../clients/orgsClient'
import {deleteDataJobs, getData, postData } from '../clients/jobClient'
import swal from 'sweetalert';

export class JobView extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            jobs: [],
            orgsFromAPI: [],
            jobsFromAPI: []
        }
    }

    updateOrgsFromAPI = (datos) => {
        this.setState({
            orgsFromAPI: datos
        })
    }

    updateJobsFromAPI = (datos) => {
        this.setState({
            jobsFromAPI: datos
        })
    }

    componentDidMount(){

        getDataOrgs(this.updateOrgsFromAPI)
        getData(this.updateJobsFromAPI)

    }

    addJob = (position, description , organizationId) => {
        postData(position, description, organizationId)
    }

    deleteJob = (id) => {
        if(deleteDataJobs(id)){
            swal({
                title: "Eliminado!",
                text: "El registro se ha eliminado con exito, por favor recargue la pantalla!",
                icon: "info",
                button: "Entendido",
              });
        }
    }


    render(){
        return(
            <>
                <div>
                    <JobForm addJob={this.addJob} orgsFromAPI={this.state.orgsFromAPI} />
                    <div className="list-countries">
                        <table>
                            <thead>
                                <tr>
                                    <th>Posicion</th>
                                    <th>Descripcion</th>
                                    <th>Organizacion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.jobsFromAPI.map(job =>
                                    <tr className="list" key={job.id}>
                                        <td>{job.position}</td>
                                        <td>{job.description}</td>
                                        <td>{job.organization.name}</td>
                                        <td><button onClick={() => this.deleteJob(job.id)} className="trash-btn" >
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