// library
import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const projectDetails = () => {
    // use router to determine project ID passed to dynamic page
    const router = useRouter()
    const projectId = router.query.id

    const [technologies, setTechnologies] = useState({})
    const [project, setProject] = useState({})

    // fetch project and technology data from AWS RDS mySQL instance
    useEffect(() => {
        fetch(`/api/getProjectById/${projectId}`).then((queryResult) => {
            queryResult.json().then((projectObject) => {
                setProject(projectObject.project);
            })
        })
        fetch(`/api/getTechnologiesByProjectId/${projectId}`).then((queryResult) => {
            queryResult.json().then((technologiesObject) => {
                setTechnologies(technologiesObject.technologies);
            })
        })
    }, [projectId]);

    return (
        <div className='flex flex-col justify-content-start items-center'>
            <div className='w-3/4 max-h-fit p-2 object-center bg-custom-card rounded-md'>
                <div className='projectNameDiv'>
                    {project.name}
                </div>
            </div>
        </div>
    )
}

export default projectDetails