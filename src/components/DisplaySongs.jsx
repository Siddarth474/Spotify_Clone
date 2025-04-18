import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DisplaySongs = ({image,name,desc,id}) => {

  const {playWithId} = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] hover:bg-[#515151] p-2 rounded cursor-pointer'>
        <img src={image} className='rounded' alt='' />
        <h2 className='text-[17px] my-1 font-bold'>{name}</h2>
        <p className='text-gray-300'>{desc}</p>
    </div>
  )
}

export default DisplaySongs