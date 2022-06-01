import React, { useState } from 'react'
import CargoInfo from '../ui-library/components/CargoInfo'
import Greeting from '../ui-library/components/Greeting'
import SearchCargo from '../ui-library/components/SearchCargo'

type Props = {}

const Home = (props: Props) => {
  const [Cargo, setCargo] = useState({owner: '',adress: '',location: '',status: '',})


  const data = (c:{owner: string,adress: string,location: string,status: string,}) => {
    setCargo(c)
  }

  const cargoValidation = ():boolean => {
    if (Cargo.owner === '' || Cargo.adress === '' || Cargo.location === '' || Cargo.status === '') {
      return false
    } else {
    return true
    }
  }

  return (
    <div>
      <SearchCargo data={data}/>
      {cargoValidation() ? <CargoInfo Cargo={Cargo} /> : <Greeting />}
    </div>
  )
}

export default Home