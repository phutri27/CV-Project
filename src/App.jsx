import { PersonInfo } from "./components/personalInfo";
import { useState } from "react";
import { AlmaMater } from "./components/almaMater";
import { Experience } from "./components/experience";
import Icon from '@mdi/react';
import { mdiEmailArrowRightOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import "./styles/styles.css"

function CV({person, education, experience}){
    return (
        <section className="CV">
            <div className="CV-info">
                <p className="CV-info-name"><b>{person.name}</b></p>
                <div>
                    <p><Icon path={mdiEmailArrowRightOutline}
                    className="icon-mail" 
                    size={1} /> 
                    {person.email}</p>
                    <p>
                    <Icon path={mdiPhone} size={1} />{person.phone}</p>
                </div>
            </div>
            <div className="CV-edu">
                <p className="CV-edu-title">Education</p>
                <hr className="solid"/>
                <div className="CV-edu-section">
                {education.map(edu =>
                    <div className="CV-edu-info">
                        <div className="CV-edu-info-title">
                            <p><b>{edu.name}</b></p>
                            <p><i>{edu.major}</i></p>
                            <p><i>{edu.GPA && "GPA: "} {edu.GPA} </i></p>
                        </div>
                        <div className="CV-edu-info-date">
                            <p>{edu.dateStart} 
                                {edu.dateStart && edu.dateEnd && " - "}
                                {edu.dateEnd}</p>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <div className="CV-work"> 
                <p className="CV-work-title">Work Experience</p>
                <hr className="solid"/> 
                <div className="CV-work-section">
                    {experience.map(jobs =>
                    <div className="CV-work-info">
                        <div className="CV-work-info-title">
                            <p><b>{jobs.company}</b></p>
                            <p>{jobs.title}</p>
                            <p className="description">{jobs.description}</p>
                        </div>
                        <div className="CV-work-info-date">
                            <p>{jobs.dateStart} 
                            {jobs.dateStart && jobs.dateEnd && " - "}
                            {jobs.dateEnd}</p>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}

function App() {
    const [person, setPerson] = useState({
        name: "Abraham Lincoln",
        email: "example@gmail.com",
        phone: "+555-555-5555",
        submit: false
    })

    const [education, setEducation] = useState([
        {
            id: crypto.randomUUID(),
            name: "Harvard University",
            major:"Computer Science",
            dateStart:"2015",
            dateEnd:"2019",
            GPA: "3.8",
            submit: false
        },
        {
            id: crypto.randomUUID(),
            name: "Massachusetts Institute of Technology",
            major:"Master of Aritificial Intelligence",
            dateStart:"2020",
            dateEnd:"2022",
            GPA: "3.5",
            submit: false
        },
    ])

    const [experience, setExperience] = useState([
        {
            id: crypto.randomUUID(),
            dateStart:"08/2023",
            dateEnd:"Now",
            company: "Microsoft",
            title:"AI Engineer",
            description: "-Design and develop machine learning models -Preprocess and clean data for training Build scalable AI pipelines and systems Integrate AI into applications",
            submit: false
        }
    ])

    return (
      <div className="container">
        <div className="job-input">
            <PersonInfo
            person={person}
            setPerson={setPerson}/>
            <AlmaMater
            education={education}
            setEducation={setEducation}/>
            <Experience
            experience={experience}
            setExperience={setExperience}/>
        </div>
        <CV person={person}
        education={education}
        experience={experience}/>
      </div>
    )
}

export default App
