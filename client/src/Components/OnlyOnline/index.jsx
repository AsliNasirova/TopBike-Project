import React from 'react'
import './index.scss'
import Timer from '../Timer/timer'
const Only = () => {
  return (
    <>
    <section id='OnlyOnline'>

        <div className="OnlyOnlineArea">
            <div className="OnlyOnlineBoxIn">
                 <div className="OnlyOnlineBox">
                <h1>Only Online</h1>
                          <Timer/>
                <h3>GET 30% OFF YOUR ORDER OF $100 OR MORE</h3>
                <h5>USE CODE “TOPBIKE30”</h5><br />
                <button className='ButtonOnly'>SHOP NOW</button>
            </div>
            </div>
           
        </div>
    </section>
    </>
  )
}

export default Only