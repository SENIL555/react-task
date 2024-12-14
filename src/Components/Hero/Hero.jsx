import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
      <img height={300} width={200}  src="https://static.vecteezy.com/system/resources/previews/001/131/187/large_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg" alt="" />
      <h1><span>I'm Senil Antony</span>,frontend developer </h1>
      <p>
      "I’m a beginner frontend developer who enjoys creating websites that are easy to use and look good. I’m always learning and excited to grow my skills."
      </p>
     <div className='hero-action'>
     <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>  
    <div className='hero-resume'>My resume</div>    
    </div> 
    </div>
  )
}

export default Hero
