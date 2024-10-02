import React from 'react'
import './Mywork.css'
function Mywork() {
  return (
      <div id='work' className="mywork">
        <div className="mywork-title">
        <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
            <div className='mywork-containers'>
            <h1>Trim fit</h1>
            <p>Project Done Trim fit I along to completed a project titled "Trim fit".The Trim Fit project is 
a comprehensive fitness program designed to help individuals achieve their health and 
wellness goals.This projects aims to improve overall fitness levels and promote a healthy lifestyle</p>

        </div>
        <div className="mywork-containers">
            <h1>Calculator</h1>
            <p>
           The simple calculator using HTML, CSS, and JavaScript. This project is a great way to practice your web development skills.  
            </p>
            <a href="https://calcu-five.vercel.app/">
  <button className='btn'>show</button>
</a>
        </div>
        <div className="mywork-containers">
            <h1>coffee</h1>
            <p>
            A coffee-themed website using HTML and CSS is a delightful project.  
            </p>
            <a href="https://coffee-gamma-sable.vercel.app/">
  <button className='btn'>show
  </button>
</a>
        </div>
        <div className="mywork-containers">
            <h1>Head phone</h1>
            <p>
            Creating a headphone-themed website using HTML and CSS.
            </p>
            <a href="https://task-sooty-mu.vercel.app/">
  <button className='btn'>show
  </button>
</a>
        </div>
        </div>
    </div>
  )
}

export default Mywork
