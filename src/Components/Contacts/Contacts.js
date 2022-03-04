import React from 'react'
import Contact from '../Contact/Contact'

const Contacts = ({contacts}) => {
  return (
    <div>
        {contacts.map(contact =>(
          <Contact key={contacts.id} contact={contact}/>
        ))}
    </div>
  )
}

export default Contacts