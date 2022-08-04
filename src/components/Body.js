import React from 'react'
import Header from './Header'
import { useDataLayerValue } from '../DataLayer/DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SongRow from './SongRow'
import './Body.css'

const Body = ({spotify}) => {
  const [{discovery}, dispatch] = useDataLayerValue()

  return (
    <div className='body'>
      <Header />
      <div className='body__info'>
        <img src={discovery?.images[0]?.url} alt='weekly discovery'/>
        <div className='body__infoText'>
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>{discovery?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />
        </div>
        <div className='body__song'>
          {discovery?.tracks.items.map((item, index) => (
            <SongRow track={item.track} key={item.track.album.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body