import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.jpg'

const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} height={200} alt="" />
        </div>
        <div className="mywork-container">
            
        </div>
    </div>
  )
}

export default MyWork