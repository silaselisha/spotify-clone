import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import ReplayIcon from '@mui/icons-material/Replay'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img src='https://media.istockphoto.com/photos/vynil-vinyl-record-play-music-vintage-picture-id610227770?s=612x612' alt='cover image' className='footer__coverImage'/>
        <div className='footer__songInfo'>
          <h4>Paper</h4>
          <p>UnoTheActivist, Travis Baker</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green'/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleFilledIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon'/>
        <ReplayIcon className='footer__green'/>
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider size='small' />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer