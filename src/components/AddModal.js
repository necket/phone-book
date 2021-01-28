import React, { useState } from 'react'
import { Row, Col, Modal, Form, Button } from "react-bootstrap";

const AddModal = ({show, handleAdd}) => {

    let [inputs, setInputs] = useState({
        img: '',
        name: '',
        surname: '',
        phone: '',
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd(false, inputs)
        setInputs({
            img: '',
            name: '',
            surname: '',
            phone: '',
            description: '',
        })
    }

    return (
        <Modal show={show} size="md" centered onHide={() => handleAdd(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Add new contact</Modal.Title>
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
                                    value={inputs.phone}
                                    onChange={(e) => 
                                        setInputs(inputs => {
                                            return {...inputs, phone: e.target.value}
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
                                onClick={() => handleAdd(false)}
                            >
                                Cancel 
                            </Button>
                            <Button
                                type="submit"
                                className="mx-2"
                                variant="primary"
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddModal
