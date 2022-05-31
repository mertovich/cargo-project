import React from 'react'
import '../../assets/styles/SearchCargo.css'

type Props = {}

const SearchCargo = (props: Props) => {
  return (
    <div className='banner-div' >
      <div className='search-div' >
          <input type='text' placeholder='Cargo Number' className='search-input' />
          <button className='search-button' >Search</button>
      </div>
    </div>
  )
}

export default SearchCargo