import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tg from './Telegram'

function App() {
  return (
    <>
      <p>Привет!</p>
      <p>{tg.initDataUnsafe.user.id}</p>
    </>
  
  )
}

export default App
