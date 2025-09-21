import { useState } from "react";
import { preventEnter } from "./utils";

export function PersonInfo({person, setPerson}){
    const [currentElem, setCurrentElem] = useState(false)

    function handleChange(field){
        return (e) => setPerson({...person, [field]: e.target.value})
    }

    function submitInfo(e){
        e.preventDefault()
        setCurrentElem(!currentElem)
    }

    return (
        <>
            {currentElem ? (
            <section className="PI-section">
                <p className="PI">Personal Information</p>
                <p>Name: {person.name}</p>
                <p>Email: {person.email}</p>
                <p>Phone Number: {person.phone}</p>
                <button onClick={submitInfo}>Edit</button>
            </section>
        ):(<section className="PI-section">
                <p className="PI">Personal Information</p>
                <form action="" onKeyDown={preventEnter} onSubmit={submitInfo}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={handleChange("name")} value={person.name}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange("email")} value={person.email}/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" inputMode="numeirc" id="phone" onChange={handleChange("phone")} value={person.phone} />
                    <button>Submit</button>
                </form>
            </section>)}
        </>
    )
}

