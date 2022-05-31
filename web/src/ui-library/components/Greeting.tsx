import React from 'react'
import '../../assets/styles/Greeting.css'
import cWalk from '../../assets/images/cWalk.png'
import cCar from '../../assets/images/cCar.png'

type Props = {}

const Greeting = (props: Props) => {
    return (
        <div className='greeting-div' >
            <div className='greeing-card'>
                <img className='greeing-card-img' src={cWalk} alt='' />
                <p className='greeing-card-p' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Cum modi sint voluptatibus? Itaque doloremque earum,
                    reprehenderit natus autem incidunt et eligendi quod 
                    asperiores quam quaerat culpa nostrum aspernatur quis 
                    amet!
                </p>
            </div>
            <div className='greeing-card'>
                <img className='greeing-card-img' src={cCar} alt='' />
                <p className='greeing-card-p' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Cum modi sint voluptatibus? Itaque doloremque earum,
                    reprehenderit natus autem incidunt et eligendi quod 
                    asperiores quam quaerat culpa nostrum aspernatur quis 
                    amet!
                </p>
            </div>
        </div>
    )
}

export default Greeting