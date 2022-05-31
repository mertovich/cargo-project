import React from 'react'
import NavBar from './ui-library/components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './assets/styles/App.css'

type Props = {}

const App = (props: Props) => {
  return (
    <div className='main-div' >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App