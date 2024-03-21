import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import './cancelListing.css';

function CancelListing(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function onDelete(){
      try {
        const response = await fetch(`/api/user_listings/${props.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          console.log('Listing deleted');
          window.location.reload();
        } 

      } catch(error){
        console.error('Error deleting listing:', error);
      }
    }

    return (
      <>
        <Button variant="outline-danger" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to remove your listing?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="user-img-container">
              <Image src={props.image_url} roundedCircle className='user-listing-img'/>
            </div>
            <p>Listing Id: <strong>{props.id}</strong></p>
            <p>Bike: <strong>{props.bike}</strong></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              No
            </Button>
            <Button variant="danger" onClick={onDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default CancelListing