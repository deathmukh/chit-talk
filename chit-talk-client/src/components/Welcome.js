import React from 'react'
import logo from '../icons/communication.png';

function Welcome() {
    return (
        <div className='welcome-container'>
            <img src={logo} alt="Logo" 
            className='welcome-logo' />
            <p>View and text directly with people present in the chat rooms.</p>
        </div>
    )
}

export default Welcome