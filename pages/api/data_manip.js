import { create, deleteRecord } from '../../db/dao'
import db from '../../db/db';

// DELETE: handler to mass delete all projects
// export default async function handler (req, res) {
//   myProjects.forEach((project) => deleteRecord('projects', project.id));
//   res.status(200).json({awesome: 'msg'});
// }

// CREATE: handler to mass create all projects
// export default async function handler (req, res) {
//   myProjects.forEach((project) => create('projects', project));
//   res.status(200).json({awesome: 'msg'});
// }

// CREATE: handler to mass create all technologies
// export default async function handler (req, res) {
//   myTechnologies.forEach((tech) => create('technologies', tech));
//   res.status(200).json({awesome: 'msg'});
// }

// CREATE: handler to create new project
// export default async function handler (req, res) {
//     create('projects', newProject);
//     res.status(200).json({awesome: 'msg'});
// }

const newProject = {
    'id': 'mealcost',
    'name': 'Meal Cost',
    'course': 'NA',
    'date': 'July 2022',
    'description': 'Track the cost of meals and ingredients',
    'repo': 'https://github.com/kiserd/meal-cost',
    'spec': '',
    'snippet': '/icons/flask.svg',
    'technologies': [
        {id: 'flask', 'name': 'flask', 'icon': '/icons/flask.svg'},
        {id: 'python', name: 'python', icon: '/icons/python.png' },
        {id: 'aws', 'name': 'aws', 'icon': '/icons/aws.png'},
        {id: 'tailwind', 'name': 'tailwind', 'icon': '/icons/tailwind.png'},
        {id: 'aws', name: 'aws', icon: '/icons/aws.png' },
        {id: 'react', name: 'react', icon: '/icons/react.png' },
    ],
    'keywords': ['API']
}

const myTechnologies = [
    {id: 'c', name: 'C', icon: '/icons/c.png' },
    {id: 'linux', name: 'linux', icon: '/icons/linux.png' },
    {id: 'javascript', name: 'javascript', icon: '/icons/js.png' },
    {id: 'node', name: 'node', icon: '/icons/node.png' },
    {id: 'heroku', name: 'heroku', icon: '/icons/heroku.png' },
    {id: 'postgresql', name: 'postgresql', icon: '/icons/postgresql.png' },
    {id: 'handlebars', name: 'handlebars', icon: '/icons/handlebars.png' },
    {id: 'flutter', name: 'flutter', icon: '/icons/flutter.png' },
    {id: 'dart', name: 'dart', icon: '/icons/dart.png' },
    {id: 'firebase', name: 'firebase', icon: '/icons/firebase.png' },
    {id: 'android', name: 'android', icon: '/icons/android.png' },
    {id: 'python', name: 'python', icon: '/icons/python.png' },
    {id: 'django', name: 'django', icon: '/icons/django.png' },
    {id: 'sqlite', name: 'sqlite', icon: '/icons/sqlite.png' },
    {id: 'next', name: 'next', icon: '/icons/next.png' },
    {id: 'react', name: 'react', icon: '/icons/react.png' },
    {id: 'firebase', name: 'firebase', icon: '/icons/firebase.png' },
    {id: 'tailwind', name: 'tailwind', icon: '/icons/tailwind.png' },
    {id: 'jest', name: 'jest', icon: '/icons/jest.png' },
    {id: 'x86', name: 'x86', icon: '/icons/x86.png' },
    {id: 'aws', name: 'aws', icon: '/icons/aws.png' },
    {id: 'flask', 'name': 'flask', 'icon': '/icons/flask.png'},
]


const myProjects = [
        {
            'id': 'cs344',
            'name': 'Small Shell',
            'course': 'Operating Systems I (CS344)',
            'date': 'January 2021',
            'description': 'Light-weight shell, imitating a handful of bash\'s well-known features',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs344-operating-systems',
            'spec': '/images/smallsh.pdf',
            'snippet': '/icons/c.png',
            'technologies': [
              {id: 'c', 'name': 'C', 'icon': '/icons/c.png'},
              {id: 'linux', 'name': 'linux', 'icon': '/icons/linux.png'}
            ],
            'keywords': ['low-level programming', 'linux', 'operating systems']
        },
        {
            'id': 'cs361',
            'name': 'Ethical Eating',
            'course': 'Software Engineering I (CS361)',
            'date': 'December 2020',
            'description': 'Users can explore the underlying ethics of popular dishes',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs361-software-engineering-I',
            'spec': '',
            'snippet': '/icons/node.png',
            'technologies': [
                {id: 'javascript', 'name': 'javascript', 'icon': '/icons/js.png'},
                {id: 'node', 'name': 'node', 'icon': '/icons/node.png'},
                {id: 'heroku', 'name': 'heroku', 'icon': '/icons/heroku.png'},
                {id: 'postgresql', 'name': 'postgresql', 'icon': '/icons/postgresql.png'},
                {id: 'handlebars', 'name': 'handlebars', 'icon': '/icons/handlebars.png'},

            ],
            'keywords': ['web-development']
        },
        {
            'id': 'cs492',
            'name': 'Wastegram',
            'course': 'Mobile Development (CS492)',
            'date': 'August 2021',
            'description': 'Small businesses can leverage technology in tracking and sharing their food waste',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs492-mobile-development/wasteagram',
            'spec': '',
            'snippet': '/icons/flutter.png',
            'technologies': [
                {id: 'flutter', 'name': 'flutter', 'icon': '/icons/flutter.png'},
                {id: 'dart', 'name': 'dart', 'icon': '/icons/dart.png'},
                {id: 'firebase', 'name': 'firebase', 'icon': '/icons/firebase.png'},
                {id: 'android', 'name': 'android', 'icon': '/icons/android.png'}
            ],
            'keywords': ['mobile-development']
        },
        {
            'id': 'cs325',
            'name': 'Sudoku',
            'course': 'Algorithms (CS325)',
            'date': 'December 2020',
            'description': 'Choose an NP-complete problem, implement an example, and illustrate polynomial-time verification',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs325-algorithms',
            'spec': '',
            'snippet': '/icons/django.png',
            'technologies': [
                {id: 'python', 'name': 'python', 'icon': '/icons/python.png'},
                {id: 'django', 'name': 'django', 'icon': '/icons/django.png'},
                {id: 'sqlite', 'name': 'sqlite', 'icon': '/icons/sqlite.png'},
                {id: 'heroku', 'name': 'heroku', 'icon': '/icons/heroku.png'}
            ],
            'keywords': ['algorithms']
        },
        {
            'id': 'cs340',
            'name': 'Pet Depot',
            'course': 'Databases (CS340)',
            'date': 'June 2021',
            'description': 'Simulated small business admin portal where users could perform CRUD operations',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs340-databases',
            'spec': '',
            'snippet': '/icons/node.png',
            'technologies': [
                {id: 'javascript', 'name': 'javascript', 'icon': '/icons/js.png'},
                {id: 'node', 'name': 'node', 'icon': '/icons/node.png'},
                {id: 'heroku', 'name': 'heroku', 'icon': '/icons/heroku.png'},
                {id: 'postgresql', 'name': 'postgresql', 'icon': '/icons/postgresql.png'},
                {id: 'handlebars', 'name': 'handlebars', 'icon': '/icons/handlebars.png'},
            ],
            'keywords': ['database']
        },
        {
            'id': 'cs261',
            'name': 'Hash Map / Min Heap',
            'course': 'Data Structures (CS261)',
            'date': 'August 2020',
            'description': 'Simple implementation of a hash map and min heap',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs261-data-structures',
            'spec': '',
            'snippet': '/icons/python.png',
            'technologies': [
                {id: 'python', 'name': 'python', 'icon': '/icons/python.png'}
            ],
            'keywords': ['database']
        },
        {
            'id': 'cs467',
            'name': 'Project Matcher',
            'course': 'Capstone (CS467)',
            'date': 'December 2021',
            'description': 'Simple project matching web app',
            'repo': 'https://github.com/kiserd/OSU-CS467-Capstone-Project',
            'spec': '',
            'snippet': '/icons/next.png',
            'technologies': [
                {id: 'next', 'name': 'next', 'icon': '/icons/next.png'},
                {id: 'react', 'name': 'react', 'icon': '/icons/react.png'},
                {id: 'firebase', 'name': 'firebase', 'icon': '/icons/firebase.png'},
                {id: 'tailwind', 'name': 'tailwind', 'icon': '/icons/tailwind.png'},
                {id: 'jest', 'name': 'jest', 'icon': '/icons/jest.png'},
            ],
            'keywords': ['database']
        },
        {
            'id': 'cs271',
            'name': 'Low-level I/O',
            'course': 'Computer Architecture and Assembly Language (CS271)',
            'date': 'June 2020',
            'description': 'Get, process, and return user input using assembly language',
            'repo': 'https://github.com/kiserd/osu/tree/main/cs271-architecture-and-assembly-language',
            'spec': '',
            'snippet': '/icons/x86.png',
            'technologies': [
                {id: 'x86', 'name': 'x86', 'icon': '/icons/x86.png'},
            ],
            'keywords': ['database']
        },
        {
            'id': 'portfolio',
            'name': 'Portfolio Website',
            'course': 'NA',
            'date': 'January 2022',
            'description': 'This is getting a little meta...',
            'repo': 'https://github.com/kiserd/portfolio-site',
            'spec': '',
            'snippet': '/icons/react.png',
            'technologies': [
                {id: 'react', 'name': 'react', 'icon': '/icons/react.png'},
                {id: 'next', 'name': 'next', 'icon': '/icons/next.png'},
                {id: 'aws', 'name': 'aws', 'icon': '/icons/aws.png'},
                {id: 'tailwind', 'name': 'tailwind', 'icon': '/icons/tailwind.png'},
            ],
            'keywords': ['database']
        },
        {
            'id': 'mealcost',
            'name': 'Meal Cost',
            'course': 'NA',
            'date': 'July 2022',
            'description': 'Track the cost of meals and ingredients',
            'repo': 'https://github.com/kiserd/meal-cost',
            'spec': '',
            'snippet': '/icons/flask.png',
            'technologies': [
                {id: 'flask', 'name': 'flask', 'icon': '/icons/flask.png'},
                {id: 'python', name: 'python', icon: '/icons/python.png' },
                {id: 'aws', 'name': 'aws', 'icon': '/icons/aws.png'},
                {id: 'tailwind', 'name': 'tailwind', 'icon': '/icons/tailwind.png'},
                {id: 'react', name: 'react', icon: '/icons/react.png' },
            ],
            'keywords': ['API']
        }
    ];