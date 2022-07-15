// library
import Link from 'next/link'
import { useState, useEffect } from 'react'
// component
import ProjectCard from "../components/ProjectCard";

const Projects = ({ ids }) => {

    const [projectIds, setProjectIds] = useState([]);

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
    const res = await fetch('http://localhost:3000/api/getProjectIds');
    console.log('ids: ', res);
    const data = await res.json();
    console.log('data: ', data);
    console.log('data[records]: ', data['records']);
    return {props: {ids: data['records']}};
}