import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import Player from './components/Player'
import { getAccessToken } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

const App = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getAccessToken()
    window.location.hash = ''
    const _token = hash.access_token

    if(_token) {
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log(user)
      })
    }

  }, [])

  return (
    <div className='app'>
      {
        token ? (<Player />) :
        (<Login />)
      }
    </div>
  )
}

export default App
