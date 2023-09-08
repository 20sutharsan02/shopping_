import React from 'react';
import { useNavigate } from "react-router-dom";
import './Horizonalstyle.css';
import IMG1 from './../src/pic/download.jpg';
import IMG2 from './../src/pic/e.jpg';
import IMG3 from './../src/pic/pexels-photo-291759.webp';
import IMG4 from './../src/pic/pexels-agung-pandit-wiguna-2085521.jpg';
import IMG5 from './../src/pic/pexels-ashvini-bmr-13708226.jpg';
import IMG6 from './../src/pic/pexels-chalo-garcia-3802068.jpg';
import IMG7 from './../src/pic/pexels-truth-enock-3209258.jpg';
import IMG8 from './../src/pic/q.jpg';
import IMG9 from './../src/pic/wallpaperflare.com_wallpaper.jpg';
// import IMG10 from './../src/pic/e.jpg';
// import IMG11 from './../src/pic/e.jpg';
// import IMG12 from './../src/pic/e.jpg';
function HorizontalScroll({name,prize,img,setname,setprize,setimg})
  {
  const navigate = useNavigate()
  console.log(name,prize,img);
  const handleClick = (name,prize,img) => {
    setname(name);
    setprize(prize);
    setimg(img);
    
    console.log('Clicked with value:',prize,img);
    navigate("/output");
  };

    return (<>
    
      <h1>our products </h1>
      <div className="horizontal-scroll-container">
          <div className="imdset">
            <div className='leet'>
         <img src={IMG1} alt="Image 1 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG1)} />
        </div>
        <div className='leet'>
        <img src={IMG2} alt="Image 2 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG2)} />
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG3} alt="Image 3 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG3)} />
          {/* <h2>dress</h2> */}
          </div>
         <div className='leet'>
        <img src={IMG4} alt="Image 3 vfdbud vfdbud" className="scroll-image"  onClick={() => handleClick('dress','24,000',IMG4)}/>
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG5} alt="Image 3 vfdbud vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG5)} />
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG6} alt="Image 3 vfdbud vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG6)} />
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG7} alt="Image 3 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG7)}/>
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG8} alt="Image 3 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG8)}/>
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG9} alt="Imageff 3 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG9)}/>
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG9} alt="Image 3 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG9)}/>
        {/* <h2>dress</h2> */}
        </div>
        <div className='leet'>
        <img src={IMG9} alt="Image 3 vfdbud" className="scroll-image" onClick={() => handleClick('dress','24,000',IMG9)}/>
        {/* <h2>dress</h2> */}
        </div>
        </div>
          </div>
       
     
      </>
    );
  };
  export default HorizontalScroll;