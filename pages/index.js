import TechIcon from "../components/TechIcon";
import ProjectCard from "../components/ProjectCard";

const projects = () => {
    const myProjects = [
        {
            'id': 1,
            'name': 'Small Shell',
            'course': 'Operating Systems I (CS344)',
            'date': 'January 2021',
            'description': 'Light-weight shell, imitating a handful of bash\'s well-known features',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs344-operating-systems',
            'spec': '/images/smallsh.pdf',
            'snippet': '/icons/c.png',
            'technologies': [
              {'name': 'C', 'icon': '/icons/c.png'},
              {'name': 'linux', 'icon': '/icons/linux.png'}
            ],
            'keywords': ['low-level programming', 'linux', 'operating systems']
        },
        {
            'id': 2,
            'name': 'Ethical Eating',
            'course': 'Software Engineering I (CS361)',
            'date': 'December 2020',
            'description': 'Users can explore the underlying ethics of popular dishes',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs361-software-engineering-I',
            'spec': '',
            'snippet': '/icons/node.png',
            'technologies': [
                {'name': 'javascript', 'icon': '/icons/js.png'},
                {'name': 'node', 'icon': '/icons/node.png'},
                {'name': 'heroku', 'icon': '/icons/heroku.png'},
                {'name': 'postgresql', 'icon': '/icons/postgresql.png'},
                {'name': 'handlebars', 'icon': '/icons/handlebars.png'},

            ],
            'keywords': ['web-development']
        },
        {
            'id': 3,
            'name': 'Wastegram',
            'course': 'Mobile Development (CS492)',
            'date': 'August 2021',
            'description': 'Small businesses can leverage technology in tracking and sharing their food waste',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs492-mobile-development/wasteagram',
            'spec': '',
            'snippet': '/icons/flutter.png',
            'technologies': [
                {'name': 'flutter', 'icon': '/icons/flutter.png'},
                {'name': 'dart', 'icon': '/icons/dart.png'},
                {'name': 'firebase', 'icon': '/icons/firebase.png'},
                {'name': 'android', 'icon': '/icons/android.png'}
            ],
            'keywords': ['mobile-development']
        },
        {
            'id': 4,
            'name': 'Sudoku',
            'course': 'Algorithms (CS325)',
            'date': 'December 2020',
            'description': 'Choose an NP-complete problem, implement an example, and illustrate polynomial-time verification',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs325-algorithms',
            'spec': '',
            'snippet': '/icons/django.png',
            'technologies': [
                {'name': 'python', 'icon': '/icons/python.png'},
                {'name': 'django', 'icon': '/icons/django.png'},
                {'name': 'sqlite', 'icon': '/icons/sqlite.png'},
                {'name': 'heroku', 'icon': '/icons/heroku.png'}
            ],
            'keywords': ['algorithms']
        },
        {
            'id': 5,
            'name': 'Pet Depot',
            'course': 'Databases (CS340)',
            'date': 'June 2021',
            'description': 'Simulated small business admin portal where users could perform CRUD operations',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs340-databases',
            'spec': '',
            'snippet': '/icons/node.png',
            'technologies': [
                {'name': 'javascript', 'icon': '/icons/js.png'},
                {'name': 'node', 'icon': '/icons/node.png'},
                {'name': 'heroku', 'icon': '/icons/heroku.png'},
                {'name': 'postgresql', 'icon': '/icons/postgresql.png'},
                {'name': 'handlebars', 'icon': '/icons/handlebars.png'},
            ],
            'keywords': ['database']
        },
        {
            'id': 6,
            'name': 'Hash Map / Min Heap',
            'course': 'Data Structures (CS261)',
            'date': 'August 2020',
            'description': 'Simple implementation of a hash map and min heap',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs261-data-structures',
            'spec': '',
            'snippet': '/icons/python.png',
            'technologies': [
                {'name': 'python', 'icon': '/icons/python.png'}
            ],
            'keywords': ['database']
        },
        {
            'id': 7,
            'name': 'Project Matcher',
            'course': 'Capstone (CS467)',
            'date': 'December 2021',
            'description': 'Simple project matching web app',
            'repo': 'https://github.com/kiserd/OSU-CS467-Capstone-Project',
            'spec': '',
            'snippet': '/icons/next.png',
            'technologies': [
                {'name': 'next', 'icon': '/icons/next.png'},
                {'name': 'react', 'icon': '/icons/react.png'},
                {'name': 'firebase', 'icon': '/icons/firebase.png'},
                {'name': 'tailwind', 'icon': '/icons/tailwind.png'},
                {'name': 'jest', 'icon': '/icons/jest.png'},
            ],
            'keywords': ['database']
        },
        {
            'id': 8,
            'name': 'Low-level I/O',
            'course': 'Computer Architecture and Assembly Language (CS271)',
            'date': 'June 2020',
            'description': 'Get, process, and return user input using assembly language',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs271-architecture-and-assembly-language',
            'spec': '',
            'snippet': '/icons/x86.png',
            'technologies': [
                {'name': 'x86', 'icon': '/icons/x86.png'},
            ],
            'keywords': ['database']
        },
        {
            'id': 9,
            'name': 'Portfolio Website',
            'course': 'NA',
            'date': 'January 2022',
            'description': 'This is getting a little meta...',
            'repo': 'https://github.com/kiserd/portfolio-site',
            'spec': '',
            'snippet': '/icons/react.png',
            'technologies': [
                {'name': 'react', 'icon': '/icons/react.png'},
                {'name': 'next', 'icon': '/icons/next.png'},
                {'name': 'aws', 'icon': '/icons/aws.png'},
                {'name': 'tailwind', 'icon': '/icons/tailwind.png'},
            ],
            'keywords': ['database']
        }
    ];
  return ( 
    <div className='flex flex-col justify-items-center bg-custom-background'>
        <ProjectCard project={myProjects[0]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[6]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[2]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[7]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[4]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[5]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[1]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[3]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[8]} objectFit='object-left' objectScaling='object-scale-down' />
    </div>
  )
}

export default projects;
