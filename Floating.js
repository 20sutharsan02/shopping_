import React, { useState } from "react";
import './aboutstyle.css';
function Float(props)
{
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const closePopupw = () => {
   let f= document.getElementById("oo").value;
   let g= document.getElementById("ll").value;
   let h= document.getElementById("kk").value;
   if(f==="" && g==="" && h==="")
   {
    alert('fill the form')
   }
    else{ 
    alert(f+g+h+'sucessfully done');
    setIsPopupOpen(false);
    }
  };
    return(<>
    <div>
      <button  className="ggg" onClick={openPopup}>{props.pay}</button>
      {
      isPopupOpen && (
        <div className="customPopup">
          <div className="popupContent">
         
            <p>Hello, this is a custom pop-up window in React!
                
            </p>
            {/* <form></form> */}
           upi pin<input type="text"  oninvalid="alert('You must fill out the form!');"  id="kk" name="fname" required/>
           <br/>
           <br/>
           phone number<input type="text" oninvalid="alert('You must fill out the form!');" id="ll" name="fname" required/>
           <br/>
           <br/>
           OTP<input type="text" oninvalid="alert('You must fill out the form!');"  id="oo" name="fname" required/>
           <br/>
           <br/>
            <button  className="butt"onClick={closePopup}>Close</button>
            <button  className="butt" onClick={closePopupw}>submit</button>
          
          </div>
        </div>
      )
      }
    </div> 
    
    
    
    </>);
}
export default Float;