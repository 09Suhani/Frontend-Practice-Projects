import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactList({contact}){
  // console.log(contact, "from contactList")
  const contactList = contact.map( (val) => {
       return(
            <div className="contacts">
              <div style={{marginLeft: "2px"}}>{val.name}</div>
              <div className="email">{val.email}</div>
              <span><DeleteIcon/></span>
            </div>
       )
  })

  return(
   <>
    <div className="ContactsHeader">Contact List</div>
    <div>{contactList}</div>
   </>
  )
}