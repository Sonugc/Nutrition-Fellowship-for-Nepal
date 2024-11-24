import React from 'react'
import "./Coverpage.css"
import { Link } from "react-router-dom"


function Coverpage() {
  return (
    <div className='cover-container' id='coverpage'>
        <div className='cover-content'>
        <div className='contents'>
        <p className='cover-header'>
            "30 Years Of Nutrition In Nepal"
        </p>
        <p className='cover-para'>Saving Lives And Transforming Community Health And Nutrition Programming</p>
        </div>
        <img src="\Coverpicture.png" alt="coverpic" className='coverpic'/>
      </div>
    </div>

    
  )
}

export default Coverpage
