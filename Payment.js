import React from 'react';
import Aboutreal from './Aboutreal.js';
import Float from './Floating.js';
import './aboutstyle.css';
import Cash from'./Cashondelivery.js' ;
// import { Link } from 'react-router-dom';
function Payment({name,prize,img})
{
console.log(name,prize,img);
return <> 

<div className='minn'>
<div className='main'>
    <div className='main1'>
        <img src={img} alt='new product'/>
    </div>
    <div className='main2'>
            <h1>product name:{name}</h1>
            <br/>
            <h1>price:{prize}</h1>
    </div>
</div>

</div>
<div className='dss'>
<Float pay="gpay"/>
<br/>
<Float pay="netbanking"/>
<br/>
<Cash pay="cashondelivery"/>
</div>

<Aboutreal/>
    
    </>
}

export default Payment;