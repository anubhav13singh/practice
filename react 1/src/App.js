import './App.css';
 import Person from "./components/Person";
import Man from './components/Man';
import State from './components/State';
import {useState} from 'react'
import React from 'react';


function SuperHero(){
  const [hero, setHero] = useState(["superman", "spiderman", "thor"])

  const [name, setName] = useState( () => "ironman")

  function change(event){
    setName(event.target.value)
  }
   
  function addName(){
    setHero([ ...hero, name])
    // spread oprerator
    setName("")
  }

  return (
    <>
    <ul>
      {hero.map((h) => (
        <li key={h}>{h}</li>
      ))}
    </ul>

    <input type={"text"} value={name} onChange={change}></input>
    <button onClick={addName}>click to add</button>
    </>
  )
}




function Increment(){
  let [count, SetCount] = useState(10);

  function plus(){
    SetCount( count +1);
  }
  function minus(){
    SetCount( count -1)
  }
 return (
  <>
    <h1>{count}</h1>
  <button onClick={plus}>+</button>
  <button onClick={minus}>-</button>
  </>
 )
}




function App() {
 
  let array = ["hitesh","ryan","john"];



  return (
    <div className='App-header'>
      <header className='name'>
        hello everyone 
        
      </header>
      <div>

       <Man number = "singh" list= {array} ></Man>
      <Person name = "bagirath"></Person>
     <State>  </State>

       <Increment/>
       <Increment/>

       <SuperHero/>

    
      
      
     </div> 
    </div>
   
  );
}

export default App;
