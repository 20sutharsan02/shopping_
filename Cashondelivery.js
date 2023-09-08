import React, { useState } from "react";
import './aboutstyle.css';
function Cash(props)
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
   let g= document.getElementById("l1").value;
   let g1= document.getElementById("l2").value;
   let h= document.getElementById("kk").value;
   if(f==="" )
   {
    alert('fill the form')
   }
   else if(g="")
   {
    alert('fill the form')
   }
   
    else{ 
    alert(f+g+h+g1+'sucessfully done');
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
           Adress<input type="text"  oninvalid="alert('You must fill out the form!');"  id="kk" name="fname" required/>
           <br/>
           <br/>
           name<input type="text" oninvalid="alert('You must fill out the form!');" id="l1" name="fname" required/>
           <br/>
           <br/>
           phone number<input type="text" oninvalid="alert('You must fill out the form!');" id="l2" name="fname" required/>
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
export default Cash;