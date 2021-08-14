import React, {Component} from "react";

export default class Paragraph extends Component{
    state ={
        name: "Kirti",
    };
    nameChanged = (e) => {
        this.setState({name: e.target.value});
    };

    /*person ={id: 12, name: "Hello", location: "Mohali" };*/

    render(){
        return (
            <div>
                 <h1>{this.state.name}</h1>
               <h1>{this.state.name}</h1>
                {this.state.name}
                <input onKeyUp= {this.nameChanged} type= "text" />
            </div>
              
        /*<div>
            <h2>id - {this.person.id}</h2>
            <h2>Name - {this.person.name}</h2>
            <h2>Location - {this.person.location}</h2>
        </div>*/

        );
    }
}

