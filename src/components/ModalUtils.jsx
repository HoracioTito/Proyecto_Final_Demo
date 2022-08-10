import React from 'react';
import { Alert, Button, Modal, Row } from 'react-bootstrap';

const ModalUtils = ({show, handleClose, messageModal}) => {
  
  return (
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant='secondary' >
            {messageModal}
          </Alert>

        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={() => handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
};

export default ModalUtils;