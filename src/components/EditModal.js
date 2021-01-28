import React, { useState } from 'react'
import { Row, Col, Modal, Form, Button } from "react-bootstrap";

const EditModal = ({show, handleEdit}) => {

    let [inputs, setInputs] = useState(show.contact)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEdit(false, inputs, true)
    }

    return (
        <Modal show={show.show} size="md" centered onHide={() => handleEdit(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Edit contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row>
                        <Col sm={12}>
                            <Form.Group controlId="user-photo">
                                <Form.Label>User photo</Form.Label>
                                <Form.Control
                                    value={inputs.img}
                                    onChange={(e) => 
                                        setInputs(inputs => {
                                            return {...inputs, img: e.target.value}
                                        })
                                    }
                                    type="text"
                                    placeholder="URL"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="user-name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={inputs.name}
                                    onChange={(e) => 
                                        setInputs(inputs => {
                                            return {...inputs, name: e.target.value}
                                        })
                                    }
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="user-surname">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                    value={inputs.surname}
                                    onChange={(e) => 
                                        setInputs(inputs => {
                                            return {...inputs, surname: e.target.value}
                                        })
                                    }
                                    type="text"
                                    placeholder="Surname"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group controlId="user-phone-number">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control
                                    value={Number(inputs.phone)}
                                    onChange={(e) => 
                                        setInputs(inputs => {
                                            return {...inputs, phone: Number(e.target.value)}
                                        })
                                    }
                                    type="number"
                                    placeholder="+380000000000"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group controlId="user-phone-number">
                                <Form.Label>Short description</Form.Label>
                                <Form.Control
                                    value={inputs.description}
                                    onChange={(e) => 
                                        setInputs(inputs => {
                                            return {...inputs, description: e.target.value}
                                        })
                                    }
                                    type="text"
                                    placeholder="..."
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={12} className="d-flex justify-content-center">
                            <Button
                                type="button"
                                className="mx-2"
                                variant="secondary"
                                onClick={() => handleEdit(false)}
                            >
                                Cancel 
                            </Button>
                            <Button
                                type="submit"
                                className="mx-2"
                                variant="primary"
                            >
                                Save changes
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditModal
