import React from 'react'

export class List extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        return(
            <>
                <tr className="list" key={this.props.id}>
                    <td>{this.props.job}</td>
                    <td>{this.props.org}</td>
                    <td>{this.props.city}</td>
                    <td>{this.props.country}</td>
                    <td><button onClick={() => this.props.delete(this.props.id)} className="trash-btn" >
                        <i className="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>   
            </>
        )
    }
}