import React from 'react'

export class List extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
        
    }

    render(){
        return(
            <>
                <li key={this.props.id}> Puesto: {this.props.job} | Empresa: {this.props.org} | Ciudad: {this.props.city} | Pais: {this.props.country}</li>
                <button onClick={() => this.props.delete(this.props.id)} className="trash-btn" >
                <i className="fas fa-trash"></i>X
                </button>
            </>
        )
    }
}