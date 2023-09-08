import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Homestyle.css';
// import HorizontalScroll from './HorizontalScroll.js';
import Aboutreal from'./Aboutreal.js' ;
import backgroundVideo from './bgvide.mp4';
import './videoBackground.css'; // Import CSS file for styling
import HorizontalScroll from './HorizontalScroll';
const VideoBackground = ({name,prize,img,setname,setprize,setimg}) => {
 
  
    const [open,setOpen]=useState(false);
    const handClick=()=>setOpen(!open);
    const closeMenu=()=>setOpen(false);
    return(<>
   <div className="nav">
      <div className='logo'>
        <h4>Z U D i O</h4>
        </div>
        <div  onClick={handClick} className='nav-icons'>
           {open ?<FiX/>: <FiMenu/> }
           
           </div>
        <ul className={open? 'nav2 active':'nav2'}>
          <li onClick={closeMenu} className='li-nav'>home</li>
          <li  onClick={closeMenu} className='li-nav'><Link to="/About" className='lio'>About</Link></li>
          <li onClick={closeMenu}  className='li-nav'><Link to="/contact" className='lio'>Contact</Link></li>
          <li  onClick={closeMenu} className='li-nav'>help</li>
        </ul>
  </div>
    <div className='video-background'>
      <video autoPlay muted loop className="video-element">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="hometext">
        <h1>Z U D i O</h1>
    </div>
    </div>
    <br>
    </br>
    {/* <Link to="/horizontal" >About</Link> */}
<HorizontalScroll setname={setname}
              setprize={setprize}
              setimg={setimg}
              name={name}
              prize={prize}
              img={img}/>
      <Aboutreal/>
      
     </>
  );
};

export default VideoBackground;