// library
import Link from 'next/link'
import { useState, useEffect } from 'react'
// component
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

    const [projectIds, setProjectIds] = useState([]);

    useEffect(() => {
        let isMounted = true;
        fetch('/api/getProjects').then((res) => {
            res.json().then((data) => {
                const ids = data.records.map((project) => project.id);
                if (isMounted) {setProjectIds(ids)};
            })
        });
        return function cleanup() {
            isMounted = false
        }
    }, []);



    return ( 
        <div className='flex flex-col justify-items-center'>
            {projectIds.map((id) => {
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

// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/getProjects');
//     const data = await res.json();
//     const ids = data.records.map((project) => project.id);
//     // console.log('ids: ', ids);
//     return {props: {ids: ids}};
// }