import React from 'react'
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({show, handleDelete}) => {
    
    return (
        <Modal show={show.show} size="sm" centered onHide={() => handleDelete(false, show.id)}>
            <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Footer className="justify-content-center">
                
                    <Button variant="secondary" onClick={() => handleDelete(false, show.id)}>
                        NO
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(false, show.id, true)}>
                        YES
                    </Button>
                
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal
