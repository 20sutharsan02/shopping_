import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import About from './Abort.js';
import './Homestyle.css';
import HorizontalScroll from './Horizonal';
import VideoBackground from './videobg';

const Homed=()=>
{
    const[open,setOpen]=useState(false);
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
          <li  onClick={closeMenu} className='li-nav'><Link to="/about" className='lio'>About</Link></li>
          <li onClick={closeMenu}  className='li-nav'><Link to="/contact" className='lio'>Contact</Link></li>
          <li  onClick={closeMenu} className='li-nav'>help</li>
        </ul>
  </div>
        <VideoBackground/>
        <HorizontalScroll />
        <About/>
    </>);

}
export default Homed;