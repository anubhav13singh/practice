import './App.css';
 import Person from "./components/Person";
import Man from './components/Man';
import State from './components/State';
import {useState} from 'react'
import React from 'react';

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
  return (
    <div className='App-header'>
      <header className='name'>
        hello everyone 
        
      </header>
      <div>
       <Man number = "anubhav"></Man>
       <Man number = "singh"></Man>
      <Person name = "bagirath"></Person>
     <State>  </State>

       <Increment/>
       <Increment/>
      
     </div> 
    </div>
   
  );
}

export default App;
