import React, { useState } from 'react'
import '../../assets/styles/CargoRegister.css'

const CargoRegister = props => {
    const [owner, setOwner] = useState({})
    const [adress, setAdress] = useState({})
    const [location, setLocation] = useState({})
    const [status, setStatus] = useState({})

    const registerCargo = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                owner: owner,
                adress: adress,
                location: location,
                status: status
            })}
            fetch('http://localhost:8080/api/registercargo', requestOptions)
            .then(response => response.json())
            .then(data => {
               props.getSetCargo(data)
            })
    }

    return (
        <div className='cargo-register-div' >
            <h3>Cargo Register</h3>
            <div className='cargo-register-input-div' >
                <input onChange={(e) => setOwner(e.target.value)} className='cargo-register-input' type='text' placeholder='owner'></input>
                <input onChange={(e) => setAdress(e.target.value)} className='cargo-register-input' type='text' placeholder='adress'></input>
                <input onChange={(e) => setLocation(e.target.value)} className='cargo-register-input' type='text' placeholder='location'></input>
                <select onChange={(e)=> setStatus(e.target.value)} name='status' className='cargo-register-input'>
                    <option value="received">received</option>
                    <option value="in transport">in transport</option>
                    <option value="eleased for distribution">released for distribution</option>
                </select>            </div>
            <button onClick={()=> registerCargo()} className='cargo-register-button' >send</button>
        </div>
    )
}

export default CargoRegister