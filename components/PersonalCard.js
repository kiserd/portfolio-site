

const PersonalCard = ({source, desc, reverse=false}) => {
    const card = () => {
        return (
            <div className='grid grid-cols-3'>
                <div className='col-start-1 col-span-1'>
                    <img className='object-scale-down imgBorder' src={source} alt='' />
                </div>
                <div className='col-start-2 col-span-2 self-center'>
                    <div className='p-5 text-md text-left'>
                        {desc}
                    </div>
                </div>
            </div>
        )
    }

    const reverseCard = () => {
        return (
            <div className='grid grid-cols-3'>
                <div className='col-start-1 col-span-2 self-center'>
                    <div className='p-5 text-md text-right'>
                        {desc}
                    </div>
                </div>
                <div className='col-start-3 col-span-1'>
                    <img className='object-scale-down imgBorder' src={source} alt='' />
                </div>
            </div>
        )
    }

    if (reverse) return reverseCard();
    else return card();
}

export default PersonalCard;
