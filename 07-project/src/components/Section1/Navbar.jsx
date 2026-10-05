import React from 'react'

const navbar = () => {
  return (
    <div className='flex items-center justify-between px-18 py-8'>
      <h4 className='bg-black text-white px-6 py-2 rounded-full uppercase cursor-pointer'>Target Audience</h4>
      <button className='bg-gray-300 px-6 py-2 rounded-full uppercase tracking-widest text-sm cursor-pointer'>Digital Banking Platform</button>
    </div>
  )
}

export default navbar
