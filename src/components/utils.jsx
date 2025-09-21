function handleChange(subject, setSubject, field, id){
        return (e) => 
          setSubject(subject.map(sbj =>
              sbj.id === id ? {...sbj, [field]: e.target.value} : sbj
          ))
    }

function submitInfo(subject, setSubject, e, id){
    e.preventDefault()
    // submit only form that click
    setSubject(subject.map(sbj =>
        sbj.id === id ? {...sbj, submit: !sbj.submit} : sbj
    ))
}

function deleteForm(subject, setSubject, id){
    setSubject(subject.filter(sbj => sbj.id !== id ))
}

export {handleChange, submitInfo, deleteForm}
