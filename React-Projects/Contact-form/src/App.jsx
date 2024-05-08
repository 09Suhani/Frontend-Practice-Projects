import './App.css'
import Header from "./Components/Header"
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import { useState } from 'react'

function App() {
   const[contact, setContact] = useState([]);
   function addcontact (data){
    setContact([...contact,data])
   }
   
    return(
      <> 
       <div>
       <Header/>
       <AddContact addcontact={addcontact}/>
       <ContactList contact={contact}/>
       </div>
      </>
    )
}

export default App
