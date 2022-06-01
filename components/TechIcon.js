// library
import React from 'react';
import Image from 'next/image'

const TechIcon = ({ source }) => {
  return (

    <div className='pr-1 mb-1 w-7 h-7 relative'>
      <Image
      src={source}
      layout='fill'
      objectFit='contain'
      />
    </div>
  )
}

export default TechIcon;
