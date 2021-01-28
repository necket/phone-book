import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import ContactList from './components/ContactList'
import data from './data'

const App = () => {

  let [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || data
  )

  const updateContacts = (newContacts) => {
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    setContacts(newContacts)
  }

  const deleteContact = (id) => {
    let newContacts = [...contacts].filter(contact => contact.id !== id)
    
    updateContacts(newContacts)
  }

  const addContact = (contact) => {
    let newContact = {...contact, id: uuidv4()}
    let newContacts = [...contacts, newContact]

    updateContacts(newContacts)
  }

  const editContact = (newContact) => {
    let newContacts = [...contacts].map(contact => 
      contact.id === newContact.id ? newContact : contact
    )

    updateContacts(newContacts)
  }

  return (
    <Container>
      <Header/>
      <ContactList 
        contacts={contacts}
        deleteContact={deleteContact}
        addContact={addContact}
        editContact={editContact}
      />
    </Container>
  );
}

export default App;
