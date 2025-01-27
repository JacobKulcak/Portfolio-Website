import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.png'

const MyWork = () => {
  return (
    <div id="work" className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} height={200} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index)=>{
                return <img key={index} src={work.w_img} height={300} width={400} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} height={30} alt="" />
        </div>
    </div>
  )
}

export default MyWork