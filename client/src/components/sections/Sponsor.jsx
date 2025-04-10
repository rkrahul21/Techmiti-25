import React from 'react'
import './Sponsors.css'
const Sponsors = () => {
  return (
    <div className='sponsors-cont'>
        <div className="cont">
            <h1>Title Sponsor</h1>
            <img className='contimg' src='https://i.imgur.com/d9pkeAd.png' alt='MITMAAI'/>
        </div>
        <div className="cont">
            <h1>Associate Sponsor</h1>
            <a href='https://www.dmi.ac.in/' target='blank'><img src='https://i.imgur.com/t1ESRta.jpg' alt='DMI' style={{width:"500px", height:"300px" ,borderRadius:"5px"}}/></a>
        </div>
        <div className="cont">
            <h1>Partners</h1>
            <div className="partners">
            <img className='contimg' src="https://i.imgur.com/zVIsPPH.png" alt="GO69" />
            </div>  
        </div>
        <div className="cont">
            <h1>Event Sponsor</h1>
            <div className="eventSponsors">
               <img className='eventsponsorsimg' src="https://i.imgur.com/qXJb2oi.jpg" alt="synergy classes" />
               <img className='eventsponsorsimg' src="https://i.imgur.com/ZbBqdNf.jpg" alt="Decathlon" />
               <img className='eventsponsorsimg' src="https://i.imgur.com/7mE2L8v.png" alt="internshala" />
              
            </div>  
        </div>
    </div>
  )
}

export default Sponsors