
const PersonalCard = ({source, desc}) => {
    return (
        <div className='w-3/4 max-w-4xl p-2 mb-4 flex self-center row-span-1 bg-custom-card rounded-md hover:bg-custom-hover'>
            <div className='grid grid-cols-3'>
                <div className='col-start-1 col-span-1'>
                    <img className='object-scale-down imgBorder' src={source} alt=''/>
                </div>
                <div className='col-start-2 col-span-2 self-start'>
                    <div className='pt-1 pl-6 text-xl font-bold text-custom-text-primary'>
                        placeholder
                    </div>
                    <div className='pl-6 text-md text-left text-custom-text-secondary'>
                        {desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalCard;
