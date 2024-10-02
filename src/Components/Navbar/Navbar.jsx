import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navbar() {
  const[menu,setMenu]= useState("home")
  return (
    <div className='navbar'>
      <img height={100} width={100} src="https://th.bing.com/th/id/OIP.4LBzfAiXNE0zyGVBJK7wIgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" />
      <ul className='nav-menu'>
        
      <li><AnchorLink className='anchor-link' href='#home' ><p onClick={()=>setMenu("home")}>Home</p ></AnchorLink>{menu==="home"?<img height={60} width={50} src='https://i.pinimg.com/originals/89/39/c9/8939c96a76568255c1b8fb2be6e7ef84.jpg'alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img height={60} width={50}src='https://th.bing.com/th/id/OIP.boz3UaTFYHZG8CV3j79XRgHaHa?rs=1&pid=ImgDetMain'alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#service'><p  onClick={()=>setMenu("service")}>Workshop</p></AnchorLink>{menu==="service"?<img height={60} width={50} src='https://i.pinimg.com/originals/54/47/b1/5447b18f3ff226459b66481a3a684808.jpg'alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>portfolio</p></AnchorLink>{menu==="work"?<img height={60} width={50}src='https://png.pngtree.com/png-clipart/20191121/original/pngtree-beautiful-workplace-vector-line-icon-png-image_5092915.jpg'alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>contact</p></AnchorLink>{menu==="contact"?<img height={60} width={50} src='https://static.vecteezy.com/system/resources/previews/015/720/174/original/eps10-white-phone-call-or-telephone-abstract-icon-isolated-on-black-background-contact-us-or-hotline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg'alt=''/>:<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
