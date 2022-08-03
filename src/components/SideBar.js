import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import SidebarOption from './SidebarOption'

import { useDataLayerValue } from '../DataLayer/DataLayer'

import './SideBar.css'

const SideBar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue()
   
  return (
    <div className='sidebar'>
          <img className='sidebar__logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='spotify logo'/>
          <SidebarOption Icon={HomeIcon} title={'Home'} />
          <SidebarOption Icon={SearchOutlinedIcon} title={'Search'} />
          <SidebarOption Icon={LibraryMusicOutlinedIcon} title={'Your Library'} />
          <br />
          <strong className='sidebar__title'>Playlist</strong>
          <hr />
          {playlists?.items?.map(item => (<SidebarOption title={item.name} />))}
    </div>
  )
}

export default SideBar