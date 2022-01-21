import TechIcon from "./TechIcon";

const EducationCard = ({ edu }) => {
    let imgStyle = 'rounded-md';
  return (
      <div className='w-3/4 max-w-md max-h-sm p-2 mb-4 flex self-center bg-custom-card rounded-md hover:bg-custom-hover'>
            <div className='flex'>
                <div className='w-28 shrink-0 self-center'>
                    <img className={imgStyle} src={edu.icon} alt=''/>
                </div>
                <div className='self-start'>
                    <div className='pt-1 pl-6 text-2xl font-bold text-custom-text-primary'>
                        {edu.name}
                    </div>
                    <div className='pl-6 pt-1 text-xs font-light text-left text-custom-text-secondary'>
                        {edu.location}
                    </div>
                    <div className='pl-6 pt-1 text-xs font-light text-left text-custom-text-secondary'>
                        {edu.degree} {', '} {edu.department}
                    </div>
                    <div className='pl-6 pt-1 text-xs font-light text-left text-custom-text-secondary'>
                        {edu.gpa}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EducationCard;
