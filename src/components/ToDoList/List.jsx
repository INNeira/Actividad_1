import React from 'react'

export class List extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        return(
            <>
                <div className="list">
                    <li key={this.props.id}> <span>Puesto:</span> {this.props.job} | <span>Empresa:</span> {this.props.org} | <span>Ciudad:</span> {this.props.city} | <span>Pais:</span> {this.props.country}</li>
                    <button onClick={() => this.props.delete(this.props.id)} className="trash-btn" >
                    <i className="fas fa-trash"></i>
                    </button>
                </div>
            </>
        )
    }
}