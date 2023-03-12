import React, { useContext } from 'react'
import { myContext } from '../Context'
import Userdetails from './Userdetails';
function Button() {
    const data = useContext(myContext);
  return (
    <div style={{backgroundColor: data.color }}>
        <Userdetails/>
    </div>

  )  
  
}

export default Button