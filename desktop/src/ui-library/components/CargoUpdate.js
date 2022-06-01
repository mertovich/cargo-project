import React, { useState } from 'react'
import '../../assets/styles/CargoUpdate.css'

const CargoUpdate = props => {
    const [location, setLocation] = useState('')
    const [Status, setStatus] = useState('')

    const handleChange = (e) => {
        if (e.target.name === 'location') {
            setLocation(e.target.value)
        }
        if (e.target.name === 'status') {
            setStatus(e.target.value)
        }
    }

    const updateLocation = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: props.Cargo.id  ,location: location })
        };
        fetch('http://localhost:8080/api/updatecargolocation', requestOptions)
            .then(response => response.json())
            .then(data => {
               props.getSetCargo(data)
            })
    }

    const updateStatus = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: props.Cargo.id  ,status: Status })
        };
        fetch('http://localhost:8080/api/updatecargostatus', requestOptions)
            .then(response => response.json())
            .then(data => {
                props.getSetCargo(data)
            })
    }


    return (
        <div>
            <div className='cargo-update-div' >
                <h3>Update Location</h3>
                <input onChange={handleChange} name='location' className='cargo-update-input' type="text" placeholder='New location' />
                <button onClick={()=> updateLocation()} className='cargo-update-button' >Update</button>
            </div>
            <div className='cargo-update-div'>
                <h3>Update Status</h3>
                <select onChange={handleChange} name='status' className='cargo-update-input'>
                    <option value="received">received</option>
                    <option value="in transport">in transport</option>
                    <option value="eleased for distribution">released for distribution</option>
                </select>
                <button onClick={()=> updateStatus()} className='cargo-update-button' >Update</button>
            </div>
        </div>
    )
}

export default CargoUpdate