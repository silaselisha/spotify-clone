import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './Components/Login'
import Player from './Components/Player'
import { getAccessToken } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer/DataLayer'

const spotify = new SpotifyWebApi()

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getAccessToken()
    window.location.hash = ''
    const _token = hash.access_token

    if(_token) {
      spotify.setAccessToken(_token)

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, [])

  return (
    <div className='app'>
      {
        token ? (<Player spotify={spotify} />) :
        (<Login />)
      }
    </div>
  )
}

export default App
