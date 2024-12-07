import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='Parent'>
      <div className="Child">
        <div className="nickName">
          <img className='icon' src="/images/icon.png" alt="" />
          <img className='edit' src="/images/vector.png" alt="" />
          <a className='text' href="">Nickname</a>
        </div>
        <div className="container">
          <div className="gender">
            <p>Your Gender (Be real)?</p>
            <div className="buttons">
              <button className='male'>Male</button>
              <button className='female'>Female</button>
              <button className='other'>Other</button>
            </div>
          </div>
          <div className="search">
            <p>Who are you looking for?</p>
            <div className="buttons">
              <button className='male'>Male</button>
              <button className='female'>Female</button>
              <button className='other'>Other</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
