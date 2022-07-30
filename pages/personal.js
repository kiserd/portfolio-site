import PersonalCard from "../components/PersonalCard";
import PersonalCollage from "../components/PersonalCollage";

const Personal = () => {
  return (
    <div className='flex flex-col justify-start justify-items-center'>
      <div className='w-3/4 max-w-4xl max-h-3xl p-2 flex self-center rounded-md'>
            <PersonalCollage />
        </div>
        <div className='w-3/4 max-w-4xl max-h-3xl p-2 self-center'>
            <div className='text-custom-text-secondary text-sm text-center text-light'>
              My wife, Marina, and I have spent the last 10 years collecting foster dogs and enjoying our friendship. We have a one-eyed Old English Bulldog and a Pitbull German-Shepherd mix. We look forward to expanding our family in the near future.
            </div>
        </div>

    </div>
  )
}

export default Personal;
