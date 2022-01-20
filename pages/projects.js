import TechIcon from "../components/TechIcon";

const projects = () => {
    const myProjects = [
        {
            'name': 'Small Shell',
            'course': 'Operating Systems I (CS344)',
            'date': '01/24/2021',
            'description': 'Light-weight shell, imitating a handful of bash\'s well-known features',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs344-operating-systems',
            'spec': '/images/smallsh.pdf',
            'snippet': '/snippets/smallsh.png',
            'technologies': [{'name': 'C', 'icon': '/icons/c.png'}],
            'keywords': ['low-level programming', 'linux', 'operating systems']
        }
    ];
  return ( 
    <div className='grid grid-rows-4 justify-items-center bg-custom-background'>
        <div className='w-3/4 p-2 mb-2 flex self-center row-span-1 bg-custom-card rounded-md hover:bg-custom-hover'>
            <div className='grid grid-cols-3'>
                <div className='col-start-1 col-span-1'>
                    <img className='object-left object-none imgBorder' src={myProjects[0].snippet} alt=''/>
                </div>
                <div className='col-start-2 col-span-2 self-start'>
                    <div className='pt-1 pl-6 text-xl font-bold text-custom-text-primary'>
                        {myProjects[0].name}
                    </div>
                    <div className='pl-6 flex flex-wrap'>
                        <TechIcon source={myProjects[0].technologies[0].icon} />
                        <TechIcon source={'/icons/python.png'} />
                    </div>
                    <div className='pl-6 text-md text-left text-custom-text-secondary'>
                        {myProjects[0].description}
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/4 p-2 mb-2 flex self-center row-span-1 bg-custom-card rounded-md'>
            <div className='grid grid-cols-3'>
                <div className='col-start-1 col-span-1'>
                    <img className='object-left object-none imgBorder' src={myProjects[0].snippet} alt='' />
                </div>
                <div className='col-start-2 col-span-2 self-start'>
                    <div className='pt-1 pl-6 text-xl font-bold text-custom-cool-extraLight'>
                        {myProjects[0].name}
                    </div>
                    <div className='pl-6 flex flex-wrap'>
                        <TechIcon source={myProjects[0].technologies[0].icon} />
                        <TechIcon source={'/icons/python.png'} />
                    </div>
                    <div className='pl-6 text-md text-left text-custom-text-secondary'>
                        Description: {myProjects[0].description}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects;
