import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import { useDataLayerValue } from '../DataLayer/DataLayer'
import './Header.css'

const Header = () => {
    const [{user}, dispatch] = useDataLayerValue()
  return (
    <div className='header'>
        <div className='header__left'>
            <SearchIcon />
            <input type='text' placeholder='Artists, songs, or podcasts' />
        </div>
        <div className='header__right'>
              <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header