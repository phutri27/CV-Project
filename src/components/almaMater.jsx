import { handleChange, submitInfo, deleteForm, preventEnter } from "./utils";
// render education form
function Form({ edu, setEdu, onChange, onSubmit, index, onDelete }) {
  return (
    <>
        <form onKeyDown={preventEnter} onSubmit={(e) => onSubmit(setEdu, e, edu.id)}>
          <legend className="PI">Education {index + 1} </legend>
          <label htmlFor={`school-${edu.id}`}>University Name</label>
          <input
            id={`school-${edu.id}`}
            type="text"
            value={edu.name}
            onChange={onChange(setEdu, "name", edu.id)}
          />

          <label htmlFor={`major-${edu.id}`}>Major</label>
          <input
            id={`major-${edu.id}`}
            type="text"
            value={edu.major}
            onChange={onChange(setEdu, "major", edu.id)}
          />

          <label htmlFor={`GPA-${edu.id}`}>GPA</label>
          <input
            id={`GPA-${edu.id}`}
            type="text"
            value={edu.GPA}
            onChange={onChange(setEdu, "GPA", edu.id)}
          />

          <label htmlFor={`date-${edu.id}`}>Date of Study</label>
          <div>
            <p>From: </p>
            <input
              id={`date-${edu.id}`}
              type="text"
              inputMode="numeric"
              value={edu.dateStart}
              onChange={onChange(setEdu, "dateStart", edu.id)}
            />
            <p>To: </p>
            <input
              id={`date1-${edu.id}`}
              type="text"
              inputMode="numeric"
              value={edu.dateEnd}
              onChange={onChange(setEdu, "dateEnd", edu.id)}
            />
          </div>
          <div className="btn-div">
            <button>Submit</button>
            <button type="button" onClick={() => onDelete(setEdu, edu.id)}>Delete</button>
          </div>
        </form>
    </>
  );
}

function SubmitForm({edu, setEdu, index, onSubmit, onDelete}){
  return (
    <div>
      <p className="PI">Education {index + 1}</p>
      <p>University Name: {edu.name}</p>
      <p>Major: {edu.major}</p>
      <p>GPA: {edu.GPA}</p>
      <p>Date of Study: {edu.dateStart} 
      {edu.dateStart && edu.dateEnd && " - "}
      {edu.dateEnd}</p>
      <div className="btn-div">
        <button onClick={(e) => onSubmit(setEdu, e, edu.id)}>Edit</button>
        <button onClick={() => onDelete(setEdu, edu.id)}>Delete</button>
      </div>
    </div>
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

    return (
        <section className="PI-section-2">
            { 
            education.map((edu, index) => 
              edu.submit ? ( 
              
              <SubmitForm 
              key={edu.id}
              edu={edu}
              index={index}
              onSubmit={submitInfo}
              onDelete={deleteForm}
              setEdu={setEducation}/>):(
              
              <Form
              key={edu.id}
              edu={edu}
              onChange={handleChange}
              onSubmit={submitInfo}
              index={index}
              onDelete={deleteForm}
              setEdu={setEducation}/>))}
            <div className="add-btn-div">
              <button className="add-btn" onClick={() => setEducation([...education, educa])}>Add</button>
            </div>
        </section>
    )
}