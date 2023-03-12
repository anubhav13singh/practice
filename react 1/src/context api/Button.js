import React from 'react'
import {useContext} from 'react'
import { myContext } from '../Context';

function Button() {
  const data = useContext(myContext);
  return (
    <div style={{backgroundColor: data.color}} >Button</div>
  )
}

export default Button;







