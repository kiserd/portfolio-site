// library
import React from 'react';
import Image from 'next/image'

const TechIcon = ({ source }) => {
  return (

    <div className='mr-1 mb-1 w-10 h-10 relative'>
      <Image
      src={source}
      layout='fill'
      objectFit='contain'
      />
    </div>
  )
}

export default TechIcon;
