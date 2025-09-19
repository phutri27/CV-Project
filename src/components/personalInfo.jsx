import React, { useState } from "react";

export function PersonInfo({person, setPerson}){
    const [currentElem, setCurrentElem] = useState(false)

    function setName(e){
        setPerson({...person, name: e.target.value})
    }

    function setEmail(e){
        setPerson({...person, email: e.target.value})
    }

    function setPhone(e){
        setPerson({...person, phone: e.target.value})
    }

    function submitInfo(e){
        e.preventDefault()
        setCurrentElem(!currentElem)
    }
    return (
        <>
            {currentElem ? (
            <div>
                <form action="" onSubmit={submitInfo}>
                <p>Name: {person.name}</p>
                <p>Email: {person.email}</p>
                <p>Phone Number: {person.phone}</p>
                <button>Edit</button>
                </form>
            </div>
        ):(<div>
                <form action="" onSubmit={submitInfo}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={setName} value={person.name}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={setEmail} value={person.email}/>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" onChange={setPhone} value={person.phone} />
                <button>Submit</button>
                </form>
            </div>)}
        </>
    )
}

