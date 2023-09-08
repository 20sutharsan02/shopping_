import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Aboutreal from'./Aboutreal.js' ;
import Card from 'react-bootstrap/Card';
import './aboutstyle.css';
// import IMG8 from './../src/pic/q.jpg';

function Abort({name,prize,img})
{
    return ( <>

{/* console.log(name,prize,img); */}
<Card style={{ width: '25rem' }}>
<Card.Img variant="top" src={img} />
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Link to='/payment'> <Button variant="primary">BUY</Button> </Link>
</Card.Body>
</Card>
    
<Aboutreal/>
    </>);
}

export default Abort;