import React from "react";
class State extends React.Component {
constructor(props){
    super(props);
    this.props = props;
    // hoew to use state property
    this.state ={
       age : 23,
       person :[
        {
        naam : "qniujn",
        age : 74,
        },
        {
            naam : "wscube",
            age : 24,
            },
            {
                naam : "cube",
                age : 21,
                }
    ]
    }
}
 change(){
    this.setState({age: 32});
    // using arrow function we don't have to use bind as it doesn't rebind
}
render(){
    // let person;
    // person = this.state.boy.map((p) => {
    //     return (
    //         <person naam={p.naam} age = {p.age} />
    //     )
    // })
    return(
        <div>
              <i>  dear user he is {this.state.age} year old </i><br/>
             
                {/* <i>  dear {this .state.person[0].naam} he is {this.state.person[0].age} year old </i><br/>
              <i>  dear {this .state.person[1].naam} he is {this.state.person[1].age} year old </i><br/>
              <i>  dear {this .state.person[2].naam} he is {this.state.person[2].age} year old </i><br/>   */}

              {/* {person} */}
              <button onClick={this.change.bind(this)}>click it</button>
        </div>
        );
}
}
export default State;

