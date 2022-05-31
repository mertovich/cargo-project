import React from 'react'
import '../../assets/styles/NavBar.css';
import {Link} from 'react-router-dom';

type Props = {}

const navbar = (props: Props) => {
  return (
    <div className='navbar-div'>
        <ul className='navbar-ul' >
            <Link to='/' className='navbar-link' >Home</Link>
        </ul>
    </div>
  )
}

export default navbar