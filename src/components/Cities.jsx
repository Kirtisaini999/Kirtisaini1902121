import React, {Component} from "react";

export default class Cities extends Component{
    state ={
        cities: ["Chandigarh", "Mohali", "Panchkula"],
    };
    updateCities = (e) => {
        if (e.code === "Enter"){
        this.setState({cities: [...this.state.cities, e.target.value] });
        }
     };
     deleteCities = (city) =>{
         let newCities = [...this.state.cities];
         newCities = newCities.filter((i) => i !== city);
         console.log(newCities);
         this.setState({cities: newCities});
     }

    render(){
        return (
            <div>
               {this.state.cities.map((city) => (
                   <h1 key={city}>
                       {city}{" "}
                   <button onClick={() => this.deleteCities(city)}>Delete</button></h1>
               ))}
               <input onKeyPress={this.updateCities} type="text" />  
            </div>
        );
    }
}