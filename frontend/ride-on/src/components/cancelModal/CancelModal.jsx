import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CancelModal(props) {
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[reload, setReload] = useState(false);
    const[token, setToken] = useState(localStorage.getItem('site') || "");

    const id = props.bookingId;

    //Delete request to the backend
    async function destroy(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            console.log(message);
            alert('An error has occured. Please try again later.');
            return;
        }

        const data = await response.text(); 

        if(response.status === 204){
            console.log('Record deleted', data);
        }
    }

    function handleDelete(){
      destroy(`/api/bookings/${id}`);
      closeModal();
    }

    function closeModal(){
      handleClose();
      window.location.reload();
    }

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Cancel
      </Button>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to cancel your booking?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Booking Details</h5>
            <hr/>
            <h6 style={{textDecoration: 'underline'}}>{props.make} {props.model}</h6>
            <p>Start Date: {props.startDate}</p>
            <p>End Date: {props.endDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={closeModal}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CancelModal;