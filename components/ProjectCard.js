// library
import { useState, useEffect } from 'react'
// component
import TechIcon from "./TechIcon";

const ProjectCard = ({ projectId, project, objectFit, objectScaling='object-none' }) => {
    let imgStyle = objectScaling + ' ' + objectFit + ' ' + 'rounded-md + max-h-40 max-w-40';

    const [projectData, setProjectData] = useState({});

    useEffect(() => {
        fetch(`/api/getProjectById/${projectId}`).then((queryResult) => {
            queryResult.json().then((projectObject) => {
                setProjectData(projectObject.project);
            })
        })
    }, []);

  return (
      <div className='w-3/4 max-w-xl max-h-md p-2 mb-4 flex self-center bg-custom-card rounded-md hover:bg-custom-hover'>
            <div className='flex'>
                <div className='w-22 shrink-0'>
                    <img className={imgStyle} src={projectData['snippet']} alt=''/>
                </div>
                <div className='self-start'>
                    <div className='pt-1 pl-6 text-2xl font-bold text-custom-text-primary'>
                        {projectData['name']}
                    </div>
                    <div className='pl-6 flex flex-wrap'>
                        {project.technologies.map((technology) => {
                            return (
                                <TechIcon key={technology.name} source={technology.icon} />
                            )
                        })}
                        <a href={projectData['repo']}>
                            <TechIcon source='/icons/github.png' />
                        </a>
                    </div>
                    {/* <div className='pl-6 pt-2 text-md text-left text-custom-text-secondary'>
                        {project.course}
                    </div> */}
                    {/* <div className='pl-6 text-md text-left text-custom-text-secondary'>
                        {project.date}
                    </div> */}
                    {/* <div className='pl-6 text-md text-left text-custom-text-secondary hover:text-custom-text-primary'>
                        <a href={project.repo}>GitHub Repo</a>
                    </div> */}
                    <div className='pl-6 pt-3 text-xs font-light text-left text-custom-text-secondary'>
                        {project['description']}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard;
