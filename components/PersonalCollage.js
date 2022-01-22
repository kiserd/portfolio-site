
const PersonalCollage = () => {
    return (
        <div className='flex flex-row'>
            <div className='pr-2 min-h-full'>
                <img className='object-scale-down imgBorder min-h-full' src='/images/cutesie.jpg' alt=''/>
            </div>
            <div className=''>
                <img className='object-scale-down imgBorder' src='/images/cutesie3.jpg' alt=''/>
            </div>
            <div className='pl-2'>
                <img className='object-scale-down imgBorder' src='/images/cutesie4.jpg' alt=''/>
            </div>
        </div>
    )
}

export default PersonalCollage;
