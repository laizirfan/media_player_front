import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
     
    <div className='row p-5 my-5'>
      <div className='col-md-1'></div>


      <div className="col-md-5">
        <h3>Welcome to <span className='text-warning '>Media Player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed nesciunt deleniti voluptatum maiores rem earum ullam, obcaecati molestiae officia eos possimus maxime adipisci, quo dolore aliquid, quos nobis illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero fugit, quod mollitia minima vitae natus similique doloremque laudantium quidem totam corrupti nulla possimus molestiae maiores? Blanditiis aliquid quisquam obcaecati nemo?</p>

        <Link to={'/home'}><button className='btn btn-warning mt-4'>Get started</button></Link>
        
      </div>
      <div className="col-md-1"></div>
      <div className='col-md-5 p-3 d-flex justiy-content-center align-items-center'>
        <img src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" alt=""className='w-75' />
      </div>

    </div>


   <div className='mb-5 mt-5 '>
   <Row className='mb-5'>
      <h3 className='my-5 text-center'>Features</h3>

      <Col md={1}></Col>
      <Col  md={3} className='p-5 p-md-0'>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media1.tenor.com/images/e8f28121eba19ac9b346358e4d7d66e4/tenor.gif?itemid=8009181" style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>Managing video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>    
      </Card.Body>
    </Card>
      </Col>

      <Col  md={4} className='d-flex justify-content-center'>
      <Card style={{ width: '80%' }}>
    <Card.Img variant="top" src="https://media1.giphy.com/media/3o7btZ1pMda4to9zR6/source.gif"  style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title>Categorized video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>    
      </Card.Body>
    </Card>
      </Col>
      <Col  md={3}  className='p-5 p-md-0'> 
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media.tenor.com/images/97948ca733915eb236871a1b422e3a2b/tenor.gif" style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>    
      </Card.Body>
    </Card>
      </Col>
      <Col  md={1}></Col>


    </Row>

   </div>

   <div className='my-5 row'>
    <div className='col-md-1'></div>
    <div className='col-md-10 border p-5 rounded border-2'>

      <Row>
        <Col md={6} className='p-3'>
          <h2 className='text-warning'>Simple fast and powerful</h2>

           <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

           <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

           <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


           
        </Col>
        <Col md={6} className='p-3'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mdnF9R-Bzpg?si=K4_IHtNyjLBAleqB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
        
      </Row>
    </div>
    <div className='col-md-1'></div>
   </div>


   

    </>
  )
}

export default Landingpage