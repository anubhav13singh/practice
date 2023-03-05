import React from "react";
class State extends React.Component {
constructor(props){
    super(props);
    this.props = props;
    // hoew to use state property
    this.state ={
        year: 20
    };
}
change(){
    this.setState({year: 43});
}
render(){
    return(
        <div>
              <i>  dear user he is {this.state.year} year old </i><br/>
              <button onClick={this.change.bind(this)}>click it</button>
        </div>
        );
}
}
export default State;

