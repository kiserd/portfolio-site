// library
import Image from 'next/image'

const SocialIcon = ({ source }) => {
  return (
    <div className='mr-1 mb-1 w-9 h-9 relative'>
      <Image
      src={source}
      layout='fill'
      objectFit='contain'
      alt='' />
    </div>
  )
}

export default SocialIcon;
