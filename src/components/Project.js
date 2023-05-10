import React, {useEffect, useState} from 'react';

const ProjectCard = (props) => (
    <div className='card project' style={{margin: "3rem", padding: "1.5rem"}}>
        <div className='card-body'></div>
            <div className='row'>
                <div className='col-5'>
                    <img src={props.image} alt='project image' className='img-fluid' style={{borderRadius: "20px"}}/>
                </div>
                <div className='col-7'>
                    <h5 className='card-title'>{props.name}</h5>
                    <p className='card-text'>{props.description}</p>
                    <ul>
                        {props.works.map((work) => <li>{work}</li>)}
                    </ul>
                    <p className='card-text'>Tech stack: {props.technologies}</p>
                    <a href={props.url} target='_blank' className='project_links'><button type="button" className="btn btn-outline-secondary" style={{marginBottom: "1rem"}}>view project</button></a>
                </div>
            </div>
    </div>
)

const Project = (props) => {
    
    const [projects, setProjects] = useState([props]);

    return (
        <div className='projects'>
            <div className='title'>
                <h2>My Projects</h2>
                <p>Check out my latest creations!</p>
            </div>
                {console.log(projects[0].props.projects)}
                {projects[0].props.projects.map((project) => 
                    <ProjectCard 
                        key={project.id}
                        name={project.name} 
                        description={project.description} 
                        works={project.works} 
                        technologies={project.technologies} 
                        url={project.url} image={project.image} 
                    />)
                }
        </div>
    )
}

export default Project;