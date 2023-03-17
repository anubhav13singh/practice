import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ordersummary() {
    const navigate = useNavigate()
  return (
    <>
    <div>OrderConfirmed!</div>
    <button onClick={() => navigate(-1)}> Go back</button>
    </>
  )
}

export default Ordersummary