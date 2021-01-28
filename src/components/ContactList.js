import React, { useState } from 'react'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import DeleteModal from "./DeleteModal"
import AddModal from "./AddModal"
import EditModal from "./EditModal"

import editImg from '../img/edit.png'
import deleteImg from '../img/delete.png'
import nophoto from '../img/nophoto.png'

const ContactList = ({ contacts, deleteContact, addContact, editContact }) => {

    let [showDelete, setShowDelete] = useState({ show: false, id: null })
    let [showAdd, setShowAdd] = useState(false)
    let [showEdit, setShowEdit] = useState({show: false, contact: null})

    const handleDelete = (show, id, del) => {
        setShowDelete({ show, id })
        if(del){
            deleteContact(id)
        }
    }

    const handleAdd = (show, contact) => {
        if(contact){
            addContact(contact)
        }
        setShowAdd(show)
    }

    const handleEdit = (show, contact, done) => {
        if(done){
            editContact(contact)
            setShowEdit({show, contact: null})
        }else if(contact){
            setShowEdit({show, contact})
        }else{
            setShowEdit({show, contact: null})
        }
    }


    return (<>
        <ListGroup className="my-3">
            {contacts.map(({id, img, name, surname, phone, description}) => 
                <ListGroup.Item key={id}>
                    <Row>
                        <Col xs={4} md={2} className="px-1 px-md-3">
                            <Image 
                                className="contact-img"
                                src={img === '' ? nophoto : img}
                                fluid
                            />
                        </Col>
                        <Col xs={6} md={8} className="px-0 px-md-3">
                            <div className="contact-info">
                                <p>
                                    <strong>{name} {surname}</strong>
                                </p>
                                <p>
                                    {phone}
                                </p>
                            </div>
                        </Col>
                        <Col xs={2} md={2} className="px-2 px-md-3">
                           <div className="contact-buttons">
                                <div onClick={() => handleEdit(true, {id, img, name, surname, phone, description})}>
                                    <Image 
                                        src={editImg}
                                        fluid
                                    />
                                </div>
                                <div onClick={() => handleDelete(true, id)}>
                                    <Image 
                                        src={deleteImg}
                                        fluid
                                    />
                                </div>
                           </div>
                        </Col>
                    </Row>
                </ListGroup.Item>
            )}
        </ListGroup>
        <Button 
            className="add-button"
            onClick={() => handleAdd(true)}
        >
            Add
        </Button>
        <DeleteModal show={showDelete} handleDelete={handleDelete}/>
        <AddModal show={showAdd} handleAdd={handleAdd}/>
        {showEdit.show ? <EditModal show={showEdit} handleEdit={handleEdit} /> : null}
        
    </>)
}

export default ContactList
