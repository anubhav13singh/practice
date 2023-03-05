import './App.css';
 import Person from "./components/Person";
import Man from './components/Man';
import State from './components/State';
function App() {
  return (
    <div className='App-header'>
      <header className='name'>
        hello everyone ,
        hows d day going on
      </header>
      <div>
       <Man number = "anubhav"></Man>
       <Man number = "singh"></Man>
       
      <Person name = "bagirath"></Person>
      
      <State/>
      
     </div> 
    </div>
   
  );
}

export default App;
