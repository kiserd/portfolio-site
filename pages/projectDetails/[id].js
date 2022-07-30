// library
import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// component
import ProjectDetailsCard from '../../components/ProjectDetailsCard'

const ProjectDetails = () => {
    // use router to determine project ID passed to dynamic page
    const router = useRouter()
    const projectId = router.query.id

    const [technologies, setTechnologies] = useState({})
    const [project, setProject] = useState({})

    // fetch project and technology data from AWS RDS mySQL instance
    useEffect(() => {
        fetch(`/api/getProjectById/${projectId}`).then((queryResult) => {
            queryResult.json().then((projectObject) => {
                setProject(projectObject.project.Item);
            })
        })
    }, [projectId]);

    return (
        <div className='flex flex-col justify-items-center'>
            <ProjectDetailsCard projectId={projectId} />
        </div>
    )
}

export default ProjectDetails