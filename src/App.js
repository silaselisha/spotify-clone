import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import { getAccessToken } from './spotify'

const App = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getAccessToken()
    window.location.hash = ''
    const _token = hash.access_token

    if(_token) {
      setToken(_token)
    }

  }, [])

  return (
    <div className='app'>
      {
        token ? (<h1>Logged into spotify</h1>) :
        (<Login />)
      }
    </div>
  )
}

export default App
