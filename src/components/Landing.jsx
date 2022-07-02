import React from 'react';

import './Landing.css';

import SignIn from './SignIn';
import Register from './Register';

function Landing() {
  return (
    <div className=' grid grid-rows-2 grid-cols-1 w-screen h-screen landing-header'>
        <div className='justify-self-end m-1 mr-2.5'> 
            <a href='/' className='mr-2.5'>Register</a>
            <a href='/'>Sign-in</a>
        </div>
        <Register />
    </div>
  );
}

export default Landing;


// Landing Page
// Inport SigIn and Register
