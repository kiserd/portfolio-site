import TechIcon from "./TechIcon";

const ProjectCard = ({ project, objectFit, objectScaling='object-none' }) => {
    let imgStyle = objectFit + ' ' + objectScaling + ' ' + 'rounded-md';
  return (
      <div className='w-3/4 max-w-3xl max-h-sm p-2 mb-4 flex self-center row-span-1 bg-custom-card rounded-md hover:bg-custom-hover'>
            <div className='grid grid-cols-3'>
                <div className='col-start-1 col-span-1'>
                    <img className={imgStyle} src={project.snippet} alt=''/>
                </div>
                <div className='col-start-2 col-span-2 self-start'>
                    <div className='pt-1 pl-6 text-2xl font-bold text-custom-text-primary'>
                        {project.name}
                    </div>
                    <div className='pl-6 flex flex-wrap'>
                        {project.technologies.map((technology) => {
                            return (
                                <TechIcon key={technology.name} source={technology.icon} />
                            )
                        })}
                    </div>
                    <div className='pl-6 pt-2 text-md text-left text-custom-text-secondary'>
                        {project.course}
                    </div>
                    <div className='pl-6 text-md text-left text-custom-text-secondary'>
                        {project.date}
                    </div>
                    <div className='pl-6 text-md text-left text-custom-text-secondary hover:text-custom-text-primary'>
                        <a href={project.repo}>GitHub Repo</a>
                    </div>
                    <div className='pl-6 pt-4 text-sm text-left text-custom-text-secondary'>
                        {project.description}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard;
