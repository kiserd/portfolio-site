import EducationCard from "../components/EducationCard";

const education = () => {
    const eduList = [
        {
            'name': 'University of Washington',
            'location': 'Seattle, WA',
            'degree': 'Bachelor of Science',
            'department': 'Mathematics',
            'date': 'December 2014',
            'gpa': '3.26',
            'icon': '/icons/uw.png'
        },
        {
            'name': 'Oregon State University',
            'location': 'Corvallis, OR',
            'degree': 'Bachelor of Science',
            'department': 'Computer Science',
            'date': 'December 2021',
            'gpa': '4.0',
            'icon': '/icons/osu.png'
        },
    ]
    return (
        <div className='flex flex-col justify-items-center bg-custom-background'>
            <EducationCard edu={eduList[0]} />
            <EducationCard edu={eduList[1]} />
        </div>
    )
}

export default education;
