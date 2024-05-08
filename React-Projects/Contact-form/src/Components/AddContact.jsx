import React, { useState } from "react";

function AddContact(addcontact){
  const [ContactData, setContactData]= useState({name:"", email:""});
  const handleChange = (e) => {
    if(e.target.name === 'name'){
      setContactData({...ContactData, name: e.target.value});
    }
    else{
      setContactData({...ContactData, email: e.target.value});
    }
  }
  const handleAdd = () => {
    if(ContactData.name === "" || ContactData.email === ""){
      alert("Please fill all the details below....")
      return
    }
    addcontact (ContactData);
    setContactData({name:"", email:""});
  }
  return(
    <div>
      <div className="addContact">Add Contacts</div>
      <form>
          <label htmlFor='name'>Name:</label> <br />
          <input type="text" placeholder="Enter your name" name="name" id="name" value={ContactData.name} onChange={handleChange}/><br />
          <label htmlFor='email'>Email:</label> <br />
          <input type="text" placeholder="Enter your email" name="email" id="email" value={ContactData.email} onChange={handleChange}/>
      </form>
      <button className="btn" onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact;