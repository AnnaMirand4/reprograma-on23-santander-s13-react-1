import './App.css'
import Relogio from './components/Relogio'
import Subtitle from './components/Subtitle'
import Title from './components/Title'
import React from 'react'

function App() {
  return (
   <>
    <Title text='Hello World'/>
    <Subtitle>Todas em tech</Subtitle>
    <Relogio/>
   </>
  )
}

export default App
