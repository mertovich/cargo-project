import React from 'react'
import '../../assets/styles/CargoInfo.css'

const CargoInfo = props => {
  return (
    <div className='cargo-info-div' >
      <table className='cargo-table-div' >
        <tr>
          <th className='cargo-table-th'>Cargo ID</th>
          <th className='cargo-table-th' >owner</th>
          <th className='cargo-table-th'>adress</th>
          <th className='cargo-table-th'>location</th>
          <th className='cargo-table-th'>status</th>
        </tr>
        <tr>
          <td className='cargo-table-td'>{props.Cargo.id}</td>
          <td className='cargo-table-td' >{props.Cargo.owner}</td>
          <td className='cargo-table-td'>{props.Cargo.adress}</td>
          <td className='cargo-table-td'>{props.Cargo.location}</td>
          <td className='cargo-table-td'>{props.Cargo.status}</td>
        </tr>
      </table>
    </div>
  )
}

export default CargoInfo