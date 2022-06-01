import React,{useState} from 'react'
import '../../assets/styles/CargoSearch.css'

const CargoSearch = props => {
    const [cargoId,setCargoId] = useState('')

    const getCargoByID = () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({id : cargoId})
        };
        fetch('http://localhost:8080/api/getcargo', requestOptions)
          .then(response => response.json())
          .then(data => {
            props.getSetCargo(data)
          }
          )
      }
  return (
    <div className='cargo-search-div' >
        <input onChange={(e)=> setCargoId(e.target.value)} className='cargo-search-input' type='text' placeholder='Search by cargo id'/>
        <button onClick={() => getCargoByID()} className='cargo-search-button'>Search</button>
    </div>
  )
}

export default CargoSearch