import React, { useContext } from 'react'
import { myContext } from '../Context'

const Userdetails = () => {
    const data = useContext(myContext)
  return (
    <div  style={{color: data.color}}>
        my name is {data.name };
        
    </div>
  )
}

export default Userdetails