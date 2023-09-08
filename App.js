import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Abort.js';
import './App.css';
import Contact from './Contact.js';
import HorizontalScroll from "./HorizontalScroll.js";
import VideoBackground from "./videobg.js";
import Aboutreal from'./Aboutreal.js' ;
import Payment from './Payment.js';
import Cash from'./Cashondelivery.js' ;

function App() 
{
  const [name, setname] = useState("");
  const [prize, setprize] = useState("");
  const [img, setimg] = useState("");
  // const[pay,setpay]=useState("");

  return (
    <>
      <Routes>
        <Route
          path='/horizontal'
          element={
            <HorizontalScroll
              setname={setname}
              setprize={setprize}
              setimg={setimg}
              name={name}
              prize={prize}
              img={img}
            />
          }
        />
        <Route path="/" element={<VideoBackground setname={setname}
              setprize={setprize}
              setimg={setimg}
              name={name}
              prize={prize}
              img={img} />} />

        <Route path="/output" element={<About 
        name={name} prize={prize} img={img} />} />

         <Route path="/payment" element={<Payment 
         name={name}
         prize={prize}
         img={img} 
          />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<Aboutreal/>}/>
        {/* <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
