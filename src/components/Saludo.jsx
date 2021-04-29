import React from 'react';

export class Saludo extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }


    render(){
        return(
            <div>
                Hola {this.props.name} {this.props.secondname} {this.props.surname}
            </div>
        )
    }
}