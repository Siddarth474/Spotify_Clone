import React, { useContext } from 'react'
import Navbar from './Navbar'
import DisplayAlbums from './DisplayAlbums'
import { albumsData, podcastData } from '../assets/assets'
import { songsData } from '../assets/assets'
import DisplaySongs from './DisplaySongs'
import DisplayPodcasts from './DisplayPodcasts'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

    const {active} = useContext(PlayerContext);

  return (
    <div>
        <Navbar /> 
        {(active === 'all') && (
         <div className='text-white mb-4'>
            <h1 className='text-[25px] font-bold'>Featured Charts</h1>
            <div className='flex mt-2 overflow-auto '>
                {
                    albumsData.map((album , index) => (
                         <DisplayAlbums key={index} image={album.image} id={album.id}
                        name={album.name} desc={album.desc} />
                    ))
                }
            </div>
        </div>
        )} 

        {(active === 'all' || active === 'music') && (
            <div  className='text-white mb-5'>
            <h1 className='text-[25px] font-bold'>Today's biggest hits</h1>
            <div className='flex overflow-auto '>
                {
                    songsData.map((song , index) => (
                        <DisplaySongs key={index} image={song.image} id={song.id} 
                        desc={song.desc} name={song.name}  />
                    ))
                }
            </div>
        </div> 
        )}

        {(active === 'all' || active === 'podcast') && (
        <div className='text-white mb-4'>
            <h1 className='text-[25px] font-bold'>Widely Listened Podcasts</h1>
            <div className='flex overflow-auto'>
            {
                podcastData.map((podcast, index) => (
                    <DisplayPodcasts key={index} image={podcast.image} id={podcast.id} name={podcast.name} />
                ))
            }
           </div>
        </div>
        )}
    </div>
  )
}

export default DisplayHome