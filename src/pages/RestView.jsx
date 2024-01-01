import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
    const [show, setShow] = useState(false);

  const {id} =useParams()
    console.log(id);

  const allrestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant)
  console.log(allrestaurant);

  const selectedRestuarant = allrestaurant.find(item=>item.id==id)
  console.log(selectedRestuarant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <Row>
<Col md={1}></Col>
<Col md={3}>
    <img src={selectedRestuarant.photograph}  height={'100%'} width={'75%'}/>
</Col>
<Col md={7} className='px-5'>
    <hr />
    <h4 className='text-center'><span className='text-warning'>RESTAURANT</span> DETAILS</h4>
    <hr />
    <ListGroup>
      <ListGroup.Item className='text-center p-4'><h4>{selectedRestuarant.name}</h4></ListGroup.Item>
      <ListGroup.Item>Neighborhood :{selectedRestuarant.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type:{selectedRestuarant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{selectedRestuarant.address} </ListGroup.Item>
      <ListGroup.Item className='p-4 text-center'><button className='btn btn-warning me-4' onClick={handleShow}>Operating Hours</button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:{selectedRestuarant.operating_hours.Monday} </ListGroup.Item>
      <ListGroup.Item>Tuesday:{selectedRestuarant.operating_hours.Tuesday} </ListGroup.Item>
      <ListGroup.Item>Wednesday:{selectedRestuarant.operating_hours.Wednesday} </ListGroup.Item>
      <ListGroup.Item>Thursday:{selectedRestuarant.operating_hours.Thursday} </ListGroup.Item>
      <ListGroup.Item>Friday:{selectedRestuarant.operating_hours.Friday} </ListGroup.Item>
      <ListGroup.Item>Staurday:{selectedRestuarant.operating_hours.Saturday} </ListGroup.Item>
      <ListGroup.Item>Sunday:{selectedRestuarant.operating_hours.Sunday} </ListGroup.Item>
    </ListGroup>
        </Modal.Body>
      </Modal>
      <RestReview />
      </ListGroup.Item>
    </ListGroup>
</Col>
<Col md={1}></Col>
  </Row>
  )
}

export default RestView
