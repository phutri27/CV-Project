//render jobs form
function Form({jobs, onChange, index, onSubmit, onDelete}) {
    return (
        <>
            <form action="" onSubmit={(e) => onSubmit(e, jobs.id)}>
                <legend>Work Expericene {index + 1}</legend>
                <label htmlFor="date">Date</label>
                <div>
                    <input type="number" id="date" value={jobs.dateStart} onChange={onChange("dateStart", jobs.id)}/>
                    <input type="number" id="date" value={jobs.dateEnd} onChange={onChange("dateEnd", jobs.id)}/>
                </div>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" value={jobs.company} onChange={onChange("company", jobs.id)}/>
                <label htmlFor="title">Job Title</label>
                <input type="text" id="title" value={jobs.title} onChange={onChange("title", jobs.id)} />
                <label htmlFor="work">Job Description</label>
                <input type="text" id="work" value={jobs.description} onChange={onChange("description", jobs.id)}/>
                <button>Submit</button>
                <button type="button" onClick={() => onDelete(jobs.id)}>Delete</button>
            </form>
        </>
    )
}

function SubmitForm({jobs, index, onSubmit, onDelete}) {
    return (
        <>
            <p>Work Experience {index + 1}</p>
            <label htmlFor="date">Date</label>
            <div>
                <p>{jobs.dateStart}
                    {jobs.dateStart && jobs.dateEnd && " - "}
                        {jobs.dateEnd}</p>
            </div>
            <label htmlFor="company">Company</label>
            <p>{jobs.company}</p>
            <label htmlFor="title">Job Title</label>
            <p>{jobs.title}</p>
            <label htmlFor="work">Job Description</label>
            <p>{jobs.description}</p>
            <button onClick={(e) => onSubmit(e, jobs.id)}>Edit</button>
            <button onClick={() => onDelete(jobs.id)}>Delete</button>
        </>
    )
}

export function Experience({experience, setExperience}){

    const workJob = {
        id: crypto.randomUUID(),
        dateStart:"",
        dateEnd:"",
        company: "",
        title:"",
        description: "",
        submit: false
    }

    function handleChange(field, id){
        return (e) => 
          setExperience(experience.map(jobs =>
              jobs.id === id ? {...jobs, [field]: e.target.value} : jobs
          ))
    }

    function submitInfo(e, id){
        e.preventDefault()
        // submit only form that click
        setExperience(experience.map(jobs =>
          jobs.id === id ? {...jobs, submit: !jobs.submit} : jobs
        ))
    }

    function deleteForm(id){
      setExperience(experience.filter(jobs => jobs.id !== id ))
    }

    return (
        <section>
            { 
            experience.map((jobs, index) => 
              jobs.submit ? ( 
              
              <SubmitForm 
              key={jobs.id}
              jobs={jobs}
              index={index}
              onSubmit={submitInfo}
              onDelete={deleteForm}/>):(
              
              <Form
              key={jobs.id}
              jobs={jobs}
              onChange={handleChange}
              onSubmit={submitInfo}
              index={index}
              onDelete={deleteForm}
              />))}
            <button onClick={() => setExperience([...experience, workJob])}>Add</button>
        </section>
    )
}