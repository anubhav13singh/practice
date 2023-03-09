// class based component 
// in class based component we have to import 2 things

import React from "react";
class Person extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        
    }
    render(){
        return(
            <div>
                <div>name: {this.props.name}</div>
                <div>age: 25</div>
                
            </div>
        )
    }
}
export default Person;