import React from 'react';

class Heading extends React.Component{
    cities =["Chandigarh", "mohali"];
    render(){
        return(
            <>
              <h1>Name ----- Miss. {this.props.name}</h1>
              <h1>Age -----  {this.props.age}</h1>
              <h1>Location -----  {this.props.location}</h1>

            {/*<ul>
                {this.cities.map((i) => (
                    <li>{i}</li>
                ))}
            </ul>*/}
            </>
        );
        /*return <h1>I Am a heading component</h1>;*/
    }
}

export default Heading;