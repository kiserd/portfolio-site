// library
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
// component
import TechIcon from "./TechIcon";

const ProjectDetailsCard = ({ projectId }) => {
    const [projectData, setProjectData] = useState({});
    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        fetch(`/api/getProjectById/${projectId}`).then((queryResult) => {
            queryResult.json().then((projectObject) => {
                setProjectData(projectObject.project.Item);
            })
        })
    }, []);

    const router = useRouter()

  return (
      <div className='w-3/4 max-w-xl max-h-fit p-2 mb-4 flex self-center bg-custom-card rounded-md hover:bg-custom-hover' onClick={() => router.push('/projectDetails/' + projectId)}>
            <div className='flex'>
                <div className='w-32 h-32 shrink-0 relative'>
                    <Image 
                    src={(!projectData.snippet) ? '/icons/react.png' : projectData.snippet}
                    layout='fill'
                    objectFit='contain'
                    />
                </div>
                <div className='self-start'>
                    <div className='projectNameDiv'>
                        {projectData.name}
                    </div>
                    <div className='pl-6 flex flex-wrap relative'>
                        {projectData.technologies ? projectData.technologies.map((technology) => {
                            return (
                                <TechIcon key={technology.id} source={technology.icon} />
                            )
                        }) : 'Loading'}
                        <a href={projectData.repo}>
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
                    <div className='pl-6 pt-2 text-base font-light text-left text-custom-text-secondary'>
                        {projectData.description}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectDetailsCard;
