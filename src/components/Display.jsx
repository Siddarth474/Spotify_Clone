import React, { useEffect, useRef } from 'react'
import {Route , Routes, useLocation} from 'react-router';
import DisplayHome from './DisplayHome';
import AlbumItems from './AlbumItems';
import { albumsData } from '../assets/assets';

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if(isAlbum) {
      displayRef.current.style.background= `linear-gradient(${bgColor},#212121)`;
    }
    else {
      displayRef.current.style.background = '#212121';
    }
  })

  return (
    <div ref={displayRef} className='w-[100%] px-6 pt-4 m-2 rounded bg-[#212121] text-white overflow-auto lg:w-[75%] ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<AlbumItems />} />
        </Routes>
    </div>
  )
}

export default Display