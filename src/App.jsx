import { PersonInfo } from "./components/personalInfo";
import { useState } from "react";
function CV({person}){
    return (
        <div>
            <div>
                <p><b>Name: {person.name}</b></p>
                <p><b>Age: {person.email}</b></p>
                <p><b>Phone Number: {person.phone}</b></p>
            </div>
        </div>
    )
}

function App() {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        phone: "",
    })
    return (
      <div>
        <PersonInfo person={{...person}}
        setPerson={setPerson}/>
        
        <CV person={{...person}}/>

      </div>
    )
}

export default App
