import React, { useState } from "react";

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
            <section>
                <p>Personal Information</p>
                <form action="" onSubmit={submitInfo}>
                <p>Name: {person.name}</p>
                <p>Email: {person.email}</p>
                <p>Phone Number: {person.phone}</p>
                <button>Edit</button>
                </form>
            </section>
        ):(<section>
                <p>Personal Information</p>
                <form action="" onSubmit={submitInfo}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={handleChange("name")} value={person.name}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={handleChange("email")} value={person.email}/>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" onChange={handleChange("phone")} value={person.phone} />
                <button>Submit</button>
                </form>
            </section>)}
        </>
    )
}

