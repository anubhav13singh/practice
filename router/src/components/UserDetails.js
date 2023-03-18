import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
   const parms = useParams();
   const UserId = parms.UserId
  return (
    <div>
        <h1>Details about User {UserId}</h1>
    </div>
  )
}

export default UserDetails