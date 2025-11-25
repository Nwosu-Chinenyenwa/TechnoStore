import React from 'react'

export default function Banner() {
  return (
  <section className='w-[90vw] py-10 md:py-0 m-auto'>
    <div className='flex flex-col md:flex-row md:gap-0 gap-5 items-center justify-between'>
        <div className='bannerone w-[95vw] md:w-[44vw] px-5 py-5 h-38 '>
             <div>
                <h2 className='text-[36px] font-[800] text-[#4f6276]'>New Life</h2>
                <p className=' text-[20px] text-[#4f6276]'>Introducing New Category</p>
             </div>
        </div>
          <div className='bannertwo w-[95vw] md:w-[44vw] px-5 py-5 h-38 '>
             <div className='flex flex-col items-end'>
                <h2 className='text-[36px] font-[800] text-[#3D3D3D]'>New Life</h2>
                <p className=' text-[20px] text-[#3D3D3D]'>Introducing New Category</p>
             </div>
        </div>
    </div>
  </section>
  )
}
