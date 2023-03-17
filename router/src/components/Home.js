import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()
  return (
    <>
    <div className='home'> <h1>Home Page</h1>home page 
      play.google.com › store › appsGoogle Home - Apps on Google Play
Mar 6, 2023 · The Google Home app is designed to show you the status of your home and keep you up to date with what you may have missed. Check in on your home anytime and see a recap of recent events. You can...


skacdpara.wixsite.com › paraHome | para
Home | para SKACD PARAS Paraprofessional: The heartfelt ]


paras homes spokane wa
paras homes reviews
paras homes spokane valley wa
paras homes valley spokane
paras homes trickle creek

    </div>
    <br/>

    <button onClick={() => navigate('/Ordersummary')}>place Order</button>
    <br/>
    <br/>
    
<Link to={'/about'}>go to about PAGE</Link>
</>
  )
}

export default Home;