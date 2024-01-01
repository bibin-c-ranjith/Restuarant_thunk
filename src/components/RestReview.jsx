import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview() {
  const [open, setOpen] = useState(false);
  return (
    <>
       <button onClick={() => setOpen(!open)} className='btn btn-warning'>Click here to view reviews</button>
       <Collapse in={open}>
       <div className='mt-5'>
        <hr />
        <h6>name-date</h6>
        <p>Rating</p>
        <p>Description</p>

       </div>
       </Collapse>
       </>
  )
}

export default RestReview