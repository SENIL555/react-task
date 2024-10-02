import React from 'react'
import './About.css'
function About() {
  return (
    <div id='about' className='about'>
     <div className='about-title'>
     <h1>About me</h1>
     <img src="" alt="" />
    </div>
    <div className="about-section">
     <div className="about-left">
        <img height={300} width={200} src="https://static.vecteezy.com/system/resources/previews/001/131/187/large_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg " alt="" />
    </div>  
    <div className="about-right">
        <div className="about-para">
            <p>"I’m a beginner frontend developer who enjoys creating websites that are easy to use and look good. I’m always learning and excited to grow my skills."</p>
        </div>
       <div className="about-skills">
       <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"50%"}}/></div>
       <div className="about-skill"><p>Reactjs</p><hr style={{width:"40%"}}/></div>
       <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}}/></div>
       </div>
    </div> 
  </div>   
  <div id='about' className='about-achievements'>
    <h1>Education:</h1>
    <div className="about-achievement">
        <h1>BCA</h1>
        <p>Elims Institute of Management Studies</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>Higher secondary</h1>
        <p>Bethlehem convent higher secondary school</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>SSLC</h1>
        <p>St vincent pallotti central school</p>
    </div>
    <hr />
    
    </div>    
</div>
  )
}

export default About
