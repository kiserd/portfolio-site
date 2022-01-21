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
            'snippet': '/snippets/smallsh.png',
            'technologies': [{'name': 'C', 'icon': '/icons/c.png'}],
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
            'snippet': '/snippets/ethical-eating.png',
            'technologies': [
                {'name': 'javascript', 'icon': '/icons/js.png'},
                {'name': 'node', 'icon': '/icons/node.jpg'},
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
            'snippet': '/snippets/wastegram.png',
            'technologies': [
                {'name': 'flutter', 'icon': '/icons/flutter.png'},
                {'name': 'dart', 'icon': '/icons/dart.png'},
                {'name': 'firebase', 'icon': '/icons/firebase.png'}
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
            'snippet': '/snippets/sudoku.jpg',
            'technologies': [
                {'name': 'python', 'icon': '/icons/python.png'},
                {'name': 'django', 'icon': '/icons/django.png'},
                {'name': 'sqlite', 'icon': '/icons/sqlite.png'},
                {'name': 'heroku', 'icon': '/icons/heroku.png'}
            ],
            'keywords': ['algorithms']
        }
    ];
  return ( 
    <div className='flex flex-col justify-items-center bg-custom-background'>
        <ProjectCard project={myProjects[0]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[1]} objectFit='object-center' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[2]} objectFit='object-left' objectScaling='object-scale-down' />
        <ProjectCard project={myProjects[3]} objectFit='object-left' />
    </div>
  )
}

export default projects;
