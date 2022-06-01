import React, { useState, useEffect } from 'react'
import '../../assets/styles/SearchCargo.css'

interface IProps {
  data: (c: { owner: string, adress: string, location: string, status: string, }) => void
}

const SearchCargo: React.FC<IProps> = ({ data }) => {
  const [cargoID, setCargoID] = useState<string>('')
  const [cargo, setCargo] = useState({ owner: '', adress: '', location: '', status: '', })

  const getCargoID = () => {
    const requestOptions  = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ id: cargoID })
    };
    fetch('http://localhost:8080/api/getcargo', requestOptions)
      .then(response => (response.json()))
      .then(c => data(c));
  }

  const handleSubmit = () => {
    getCargoID()
    data(cargo)
  }

  return (
    <div className='banner-div' >
      <div className='search-div' >
        <input onChange={(e) => setCargoID(e.target.value)} name='' type='text' placeholder='Cargo Number' className='search-input' />
        <button onClick={() => handleSubmit()} className='search-button' >Search</button>
      </div>
    </div>
  )
}

export default SearchCargo