import React from 'react'
import Avatar from '../Avatar/Avatar'
const Contact = ({contact}) => {
  return (
    <div>
        <div>
        <Avatar  ava={contact}/>
        <div>
            <div>
              {contact.fName+ " " + contact.lName}
            </div>
            <span>
            {contact.primaryNumber +" " +contact.secondaryNumber}
            </span>
            </div>
        </div>
        <div>
            <span>
              
            </span>
            <a>{contact.email}</a>
        </div>
    </div>
    
  )
}

export default Contact