import PersonalCard from "../components/PersonalCard";
import PersonalCollage from "../components/PersonalCollage";

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
    <div className='flex flex-col justify-start justify-items-center'>
        <PersonalCollage />
    </div>
  )
}

export default personal;
