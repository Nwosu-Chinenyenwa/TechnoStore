import React from 'react'

export default function Banner() {
  return (
  <section className='w-[90vw] m-auto'>
    <div className='flex  items-center justify-between'>
        <div className='bannerone w-[44vw] px-5 py-5 h-38 '>
             <div>
                <h2 className='text-[36px] font-[800] text-[#4f6276]'>New Life</h2>
                <p className=' text-[20px] text-[#4f6276]'>Introducing New Category</p>
             </div>
        </div>
        <div className='bannertwo w-[44vw] px-5 py-5 h-38 '>
             <div className='flex flex-col items-end'>
                <h2 className='text-[36px] font-[800] text-[#3D3D3D]'>New Life</h2>
                <p className=' text-[20px] text-[#3D3D3D]'>Introducing New Category</p>
             </div>
        </div>
    </div>
  </section>
  )
}
