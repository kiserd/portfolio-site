// library
import Link from 'next/link'
import { useState, useEffect } from 'react'
// component
import ProjectCard from "../components/ProjectCard";

const Projects = ({ ids }) => {

    const [projectIds, setProjectIds] = useState([]);

    console.log('spesh ids: ', ids);
    ids.forEach((id) => console.log('id: ', id));

    // useEffect(() => {
    //     let isMounted = true;
    //     fetch('/api/getProjectIds').then((projectRecords) => {
    //         console.log(projectRecords);
    //         if (isMounted) {setProjectIds(projectRecords)};
    //     });
    //     return function cleanup() {
    //         isMounted = false
    //     }
    // }, []);


    return ( 
        <div className='flex flex-col justify-items-center'>
            {ids.map((id) => {
                return (
                    <ProjectCard
                    key={id}
                    projectId={id}
                    />
                )
            })}
        </div>
    )
}

export default Projects;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/getProjects');
    const data = await res.json();
    const ids = data.records.map((project) => project.id);
    // console.log('ids: ', ids);
    return {props: {ids: ids}};
}