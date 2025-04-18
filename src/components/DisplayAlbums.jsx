import React from 'react'
import {useNavigate} from 'react-router';

const DisplayAlbums = ({image,name,desc,id}) => {
    const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] hover:bg-[#515151] p-2 rounded cursor-pointer'>
        <img src={image} className='rounded' alt='' />
        <h2 className='text-[17px] my-1 font-bold'>{name}</h2>
        <p className='text-gray-300'>{desc}</p>
    </div>
  )
}

export default DisplayAlbums