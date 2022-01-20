import React from 'react';

const personal = () => {
  return (
    <div className='grid grid-rows-4'>
        <div className='flex justify-center row-span-1 bg-pink-500'>
            <div className='w-3/4 p-3 grid grid-cols-3 bg-red-500'>
                <div className='col-start-1 col-span-1 bg-red-500'>
                    <img className='object-scale-down imgBorder' src='/images/marina.jpg' alt='marina'/>
                </div>
                <div className='col-start-2 col-span-2 self-center bg-teal-500'>
                    <div className='p-5 text-lg text-left bg-orange-500'>
                        Say a little something about marina
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center row-span-1 bg-pink-500'>
            <div className='w-3/4 p-5 grid grid-cols-3 bg-red-500'>
                <div className='col-start-1 col-span-2 self-center bg-teal-500'>
                    <div className='p-5 text-lg text-left bg-orange-500'>
                        Say a little something about nellie
                    </div>
                </div>
                <div className='col-start-3 col-span-1 bg-red-500'>
                    <img className='object-scale-down imgBorder' src='/images/nellie.jpg' alt='nellie'/>
                </div>
            </div>
        </div>
        <div className='flex justify-center row-span-1 bg-pink-500'>
            <div className='w-3/4 p-5 grid grid-cols-3 bg-red-500'>
                <div className='col-start-1 col-span-1 bg-red-500'>
                    <img className='object-scale-down imgBorder' src='/images/zeek.jpg' alt='zeek'/>
                </div>
                <div className='col-start-2 col-span-2 self-center bg-teal-500'>
                    <div className='p-5 text-lg text-left bg-orange-500'>
                        Say a little something about zeek
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center row-span-1 bg-pink-500'>
            <div className='w-3/4 p-5 grid grid-cols-3 bg-red-500'>
                <div className='col-start-1 col-span-2 self-center bg-teal-500'>
                    <div className='p-5 text-lg text-left bg-orange-500'>
                        Say a little something about zeek
                    </div>
                </div>
                <div className='col-start-3 col-span-1 bg-red-500'>
                    <img className='object-scale-down imgBorder' src='/images/wedding2.jpg' alt='zeek'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default personal;
