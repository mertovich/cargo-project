import React,{useState} from 'react'
import '../src/assets/styles/App.css'
import CargoInfo from './ui-library/components/CargoInfo'
import CargoSearch from './ui-library/components/CargoSearch'
import CargoUpdate from './ui-library/components/CargoUpdate'

const App = () => {
  const [Cargo,setCargo] = useState({})

  const getSetCargo = (cargo) => {
    setCargo(cargo)
  }

  return (
    <div className='main-div' >
     <CargoSearch getSetCargo={getSetCargo}/>
     <CargoInfo Cargo={Cargo} />
     <CargoUpdate Cargo={Cargo} getSetCargo={getSetCargo} />
    </div>
  )
}

export default App