import React, { useState } from 'react';

import './Landing.css';

import SignIn from './SignIn';
import Register from './Register';

function Landing() {

  const[isRegistered, setIsRegistered] = useState(false);
  
  return (
    <div className=' grid grid-rows-2 grid-cols-1 w-screen h-screen landing-header'>
        <div className='justify-self-end m-1 mr-2.5'> 
            <a href='/' onClick={()=>setIsRegistered(false)} className='mr-2.5'>Register</a>
            <a href='/' onClick={(e)=>{
                e.preventDefault();
                setIsRegistered(true)}}>Sign-in</a>
        </div>
        {isRegistered ? <SignIn />: <Register />}
        {console.log(isRegistered)}
    </div>
  );
}

export default Landing;


// Landing Page
// Inport SigIn and Register
