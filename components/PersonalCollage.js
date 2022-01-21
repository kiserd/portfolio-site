
const PersonalCollage = () => {
    return (
        <div className='w-3/4 max-w-4xl max-h-3xl p-2 flex self-center rounded-md'>
            <div className='flex flex-row'>
                <div className='pr-2 min-h-full'>
                    <img className='object-scale-down imgBorder min-h-full' src='/images/wedding.jpg' alt=''/>
                </div>
                <div className=''>
                    <img className='object-scale-down imgBorder' src='/images/nellie.jpg' alt=''/>
                    {/* <img className='object-scale-down imgBorder' src='/images/zeek.jpg' alt=''/> */}
                </div>
                <div className='pl-2'>
                    <img className='object-scale-down imgBorder' src='/images/zeek.jpg' alt=''/>
                </div>
            </div>
        </div>
    )
}

export default PersonalCollage;
