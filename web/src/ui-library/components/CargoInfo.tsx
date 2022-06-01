import React from 'react'
import '../../assets/styles/CargoInfo.css'
import c1 from '../../assets/images/c1.png'
import cMove from '../../assets/images/cMove.png'
import cDoor from '../../assets/images/cDoor.png'

interface IProps {
  Cargo: {
    owner: string,
    adress: string,
    location: string,
    status: string,
  }
}

const CargoInfo: React.FC<IProps> = ({ Cargo }) => {
  const renderCargoImg = (cargoType: string) => {
    if (cargoType === 'in transport') {
      return cMove
    } else if (cargoType === 'eleased for distribution') {
      return cDoor
    } else {
      return c1
    }
  }

  return (
    <div className='cargo-info-div' >
      <h2 className='cargo-info-h2' >info</h2>
      <img className='cargo-info-img' src={renderCargoImg(Cargo.status)} alt="" />
      <table className='cargo-info-table' >
        <tr>
          <th className='cargo-info-p'>Owner</th>
          <th className='cargo-info-p'>Adress</th>
          <th className='cargo-info-p'>Location</th>
          <th className='cargo-info-p'>Status</th>
        </tr>
        <tr>
          <td className='cargo-info-p' >{Cargo.owner.slice(0,1)+ '**********'}</td>
          <td className='cargo-info-p'>{Cargo.adress.slice(0,2)+'**********'}</td>
          <td className='cargo-info-p'>{Cargo.location}</td>
          <td className='cargo-info-p'>{Cargo.status}</td>
        </tr>
      </table>
    </div>
  )
}

export default CargoInfo