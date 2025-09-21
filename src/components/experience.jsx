
import { handleChange, submitInfo, deleteForm } from "./utils"
//render jobs form
function Form({jobs, setJobs, onChange, index, onSubmit, onDelete}) {
    return (
        <>
            <form action="" onSubmit={(e) => onSubmit(setJobs, e, jobs.id)}>
                <legend className="PI">Work Expericene {index + 1}</legend>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" value={jobs.company} onChange={onChange(setJobs, "company", jobs.id)}/>
                <label htmlFor="title">Job Title</label>
                <input type="text" id="title" value={jobs.title} onChange={onChange(setJobs, "title", jobs.id)} />
                <label htmlFor="work">Job Description</label>
                <textarea rows="10" id="work" value={jobs.description} onChange={onChange(setJobs, "description",jobs.id)}></textarea>
                <label htmlFor="date">Date of Working</label>
                <div>
                    <p>From: </p>
                    <input type="text" inputMode="numeirc" id="date" value={jobs.dateStart} onChange={onChange(setJobs, "dateStart", jobs.id)}/>
                    <p>To: </p>
                    <input type="text" inputMode="numeirc" id="date" value={jobs.dateEnd} onChange={onChange(setJobs, "dateEnd", jobs.id)}/>
                </div>
                <div className="btn-div">
                    <button>Submit</button>
                    <button type="button" onClick={() => onDelete(setJobs, jobs.id)}>Delete</button>
                </div>
            </form>
        </>
    )
}

function SubmitForm({jobs, setJobs, index, onSubmit, onDelete}) {
    return (
        <>
            <p className="PI">Work Experience {index + 1}</p>
            <div>
                <p>Date of Work: {jobs.dateStart}
                    {jobs.dateStart && jobs.dateEnd && " - "}
                        {jobs.dateEnd}</p>
            </div>
            <p>Company: {jobs.company}</p>
            <p>Job Title: {jobs.title}</p>
            <p>Job Description: </p>
            <p>{jobs.description}</p>
            <div className="btn-div">
                <button onClick={(e) => onSubmit(setJobs, e, jobs.id)}>Edit</button>
                <button onClick={() => onDelete(setJobs, jobs.id)}>Delete</button>
            </div>
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
        description: [],
        submit: false
    }

    return (
        <section className="PI-section-2">
            { 
            experience.map((jobs, index) => 
              jobs.submit ? ( 
              
              <SubmitForm 
              key={jobs.id}
              jobs={jobs}
              index={index}
              onSubmit={submitInfo}
              onDelete={deleteForm}
              setJobs={setExperience}/>):(
              
              <Form
              key={jobs.id}
              jobs={jobs}
              onChange={handleChange}
              onSubmit={submitInfo}
              index={index}
              onDelete={deleteForm}
              setJobs={setExperience}/>))}
            <div className="add-btn-div">
                <button className="add-btn" onClick={() => setExperience([...experience, workJob])}>Add</button>
            </div>
        </section>
    )
}