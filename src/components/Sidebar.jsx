import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router'

const Sidebar = () => {

    const navigate = useNavigate();

  return (
    <div className='h-full w-[25%] flex-col p-2 hidden lg:flex'>
        <div className='pl-6 py-3 bg-[#212121] rounded-sm'>
            <div onClick={() => navigate('/')} className='flex items-center text-white cursor-pointer '>
                <img src={assets.home_icon} className='w-[25px]' alt='' />
                <p className='text-[17px] font-bold ml-3'>Home</p>
            </div>
            <div className='flex items-center text-white mt-4 cursor-pointer'>
                <img src={assets.search_icon} className='w-[25px]' alt='' />
                <p className='text-[17px] font-bold ml-3'>Search</p>
            </div>
        </div>
        <div className='mt-2 h-full p-3 bg-[#212121] rounded-sm'>
            <div className='flex items-center justify-between'>
             <div className='flex items-center text-white cursor-pointer '>
                <img src={assets.stack_icon} className='w-[25px]' alt='' />
                <p className='text-[18px] font-semibold ml-3'>Your Library</p>
             </div> 
             <div className='flex items-center text-white cursor-pointer'>
                <img src={assets.arrow_icon} className='w-4  cursor-pointer mr-2' alt='' />
                <img src={assets.plus_icon} className='w-4 cursor-pointer' alt='' />
             </div> 
            </div>

            <div className='text-white mt-6 bg-[#535353] p-3 rounded-sm'>
                <h1 className='font-semibold text-[17px]'>Create your first playlist</h1>
                <p className='text-slate-300'>it's easy we'll help you</p>
                <button className='bg-white text-black px-3 py-1 mt-3 text-[15px] 
                font-semibold rounded-full cursor-pointer'>Create Playlist</button>
            </div>
            <div className='text-white mt-3 bg-[#535353] p-3 rounded-sm'>
                <h1 className='font-semibold text-[17px]'>Let's find some podcasts to follow</h1>
                <p className='text-slate-300'>we'll keep you updated on new episodes</p>
                <button className='bg-white text-black px-3 py-1 mt-3 text-[15px] 
                font-semibold rounded-full cursor-pointer'>Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar