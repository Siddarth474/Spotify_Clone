import React from 'react'

const DisplayPodcasts = ({image,name,id}) => {
  return (
    <div className='min-w-[200px] hover:bg-[#515151] p-2 rounded cursor-pointer'>
        <img src={image} className='min-h-[190px] rounded object-cover' alt='' />
        <h2 className='text-[18px] my-1 font-bold'>{name}</h2>
    </div>
  )
}

export default DisplayPodcasts