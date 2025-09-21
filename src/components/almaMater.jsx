import { handleChange, submitInfo, deleteForm } from "./utils";
// render education form
function Form({ edu, onChange, onSubmit, index, onDelete }) {
  return (
    <>
        <form onSubmit={(e) => onSubmit(e, edu.id)}>
          <legend>Education {index + 1} </legend>
          <label htmlFor={`school-${edu.id}`}>University Name</label>
          <input
            id={`school-${edu.id}`}
            type="text"
            value={edu.name}
            onChange={onChange("name", edu.id)}
          />

          <label htmlFor={`major-${edu.id}`}>Major</label>
          <input
            id={`major-${edu.id}`}
            type="text"
            value={edu.major}
            onChange={onChange("major", edu.id)}
          />

          <label htmlFor={`date-${edu.id}`}>Date of Study</label>
          <div>
            <input
              id={`date-${edu.id}`}
              type="text"
              inputMode="numeric"
              value={edu.dateStart}
              onChange={onChange("dateStart", edu.id)}
            />
            <input
              id={`date1-${edu.id}`}
              type="text"
              inputMode="numeric"
              value={edu.dateEnd}
              onChange={onChange("dateEnd", edu.id)}
            />
          </div>
          <button>Submit</button>
          <button type="button" onClick={() => onDelete(edu.id)}>Delete</button>
        </form>
    </>
  );
}

function SubmitForm({edu, index, onSubmit, onDelete}){
  return (
    <>
      <p>Education {index + 1}</p>
      <label htmlFor="school">University Name</label>
      <p>{edu.name}</p>
      <label htmlFor="major">Major</label>
      <p>{edu.major}</p>
      <label htmlFor="date">Date of Study</label>
      <p>{edu.dateStart} 
      {edu.dateStart && edu.dateEnd && " - "}
      {edu.dateEnd}</p>
      <button onClick={(e) => onSubmit(e, edu.id)}>Edit</button>
      <button onClick={() => onDelete(edu.id)}>Delete</button>
    </>
  )
}

export function AlmaMater({education, setEducation}){
    const educa = {
            id: crypto.randomUUID(),
            name: "",
            major:"",
            dateStart:"",
            dateEnd:"",
            submit: false
    }

    function handleChange(field, id){
        return (e) => 
          setEducation(education.map(edu =>
              edu.id === id ? {...edu, [field]: e.target.value} : edu
          ))
    }

    function submitInfo(e, id){
        e.preventDefault()
        // submit only form that click
        setEducation(education.map(edu =>
          edu.id === id ? {...edu, submit: !edu.submit} : edu
        ))
    }

    function deleteForm(id){
      setEducation(education.filter(edu => edu.id !== id ))
    }

    return (
        <section>
            { 
            education.map((edu, index) => 
              edu.submit ? ( 
              
              <SubmitForm 
              key={edu.id}
              edu={edu}
              index={index}
              onSubmit={submitInfo}
              onDelete={deleteForm}/>):(
              
              <Form
              key={edu.id}
              edu={edu}
              onChange={handleChange}
              onSubmit={submitInfo}
              index={index}
              onDelete={deleteForm}
              />))}
            <button onClick={() => setEducation([...education, educa])}>Add</button>
        </section>
    )
}