import React, { use, useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router';
import { PlayerContext } from '../context/PlayerContext';

const Navbar = () => {
  const navigate = useNavigate();
  

  const {setActive,active} = useContext(PlayerContext);

  return (
    <div className='mb-5'>
      <div className='flex items-center justify-between mb-3'>
        <div className='flex gap-2'>
            <img src={assets.arrow_left} onClick={() => navigate(-1)} className='w-[30px] p-2  rounded-full  bg-black cursor-pointer' alt='' />
            <img src={assets.arrow_right} onClick={() => navigate(1)} className='w-[30px] p-2  rounded-full  bg-black cursor-pointer' alt='' />
        </div>
        <div className='hidden md:flex gap-3'>
            <button className='text-black text-[15px] bg-white px-3 font-semibold 
            rounded-full cursor-pointer'>Explore Premium</button>
            <button className='text-black text-[15px] bg-green-600 px-3 font-semibold 
            rounded-full cursor-pointer'>Install App</button>
            <p className='bg-blue-500 h-10 w-10 p-1 text-[18px] font-semibold flex items-center justify-center rounded-full'>S</p>
        </div>
      </div> 
      <div className='mt-2 flex items-center gap-2'>
        <button onClick={() => setActive('all')} className={`px-3  py-1 rounded-full cursor-pointer 
          ${active === 'all' ? 'bg-white text-black' : 'bg-black text-white'}`} > All </button> 

        <button onClick={() => setActive('music')} className={`px-3  py-1 rounded-full cursor-pointer ${active === 'music' ? 'bg-white text-black' : 'bg-black text-white'}`} > Music </button>

        <button onClick={() => setActive('podcast')} className={`px-3  py-1 rounded-full cursor-pointer ${active === 'podcast' ? 'bg-white text-black' : 'bg-black text-white'}`} > Podcasts </button> 
      </div>
    </div>
  )
}

export default Navbar