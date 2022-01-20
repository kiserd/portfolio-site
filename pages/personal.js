import PersonalCard from "../components/PersonalCard";

const personal = () => {
    const marinaDesc = 'My wife, Marina, works as a Case Manager within the foster community';
    const marinaSrc = '/images/marina.jpg';
    const nellDesc = 'Nellie is our one-eyed Old English Bulldog';
    const nellSrc = '/images/nellie.jpg';
    const zeekDesc = 'Zeek is our two-eyed Pitbull/Lab/German-Shepherd mutt';
    const zeekSrc = '/images/zeek.jpg';
    const weddDesc = 'The last 10-years with Marina has been an unbelievable joy';
    const weddSrc = '/images/wedding2.jpg';
  return (
    <div className='grid grid-rows-4 justify-items-center bg-custom-cool-extraLight'>
        <div className='w-3/4 p-2 flex self-center row-span-1'>
            <PersonalCard source={marinaSrc} desc={marinaDesc}/>
        </div>
        <div className='w-3/4 p-2 flex justify-center row-span-1'>
            <PersonalCard source={nellSrc} desc={nellDesc} reverse={true}/>
        </div>
        <div className='w-3/4 p-2 flex justify-center row-span-1'>
            <PersonalCard source={zeekSrc} desc={zeekDesc}/>
        </div>
        <div className='w-3/4 p-2 flex justify-center row-span-1'>
            <PersonalCard source={weddSrc} desc={weddDesc} reverse={true}/>
        </div>
    </div>
  )
}

export default personal;
