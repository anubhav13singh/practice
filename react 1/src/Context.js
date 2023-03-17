import React, { useState, createContext } from 'react';
import Hero from './context api/Hero';
import Usecard from './context api/Usecard';


export const myContext = createContext();


function Context() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    
    function myName(event){
        setName(event.target.value)
    }
    function myColor(event){
        setColor(event.target.value)
    }
  return (
    <myContext.Provider value = {{name , color}}>
    

      <form>
        <input type={"text"}
         placeholder = "enter user name" 
         value={name}
         onChange = {myName}/>

         <input type={"text"}
          placeholder = "enter color name"
          value={color} 
         onChange = {myColor}/>
      </form>
        <br/>
        <Hero/>
        <Usecard/>
    </myContext.Provider>
  )
}

export default Context