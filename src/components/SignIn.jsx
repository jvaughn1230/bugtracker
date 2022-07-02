import React from 'react';

import './SignIn.css';

function SignIN() {
  return (
    <div className=' grid grid-rows-2 grid-cols-1 w-screen h-screen landing-header'>
        <div className='justify-self-end m-1 mr-2.5'> 
            <a href='/' className='mr-2.5'>Register</a>
            <a href='/'>Sign-in</a>
        </div>
        <div className='max-w-lg my-0 mx-auto h-80 justify-self-center self-center'>
            <h1 className='text-5xl m-8 '> Sign In </h1>
            <div className='m-8'>
                <label className='pr-4'>User Name:</label>
                <input type='text' /> 
            </div>
            <div className='m-8'>
                <label className='pr-4'>Password:</label>
                <input type='password' />
            </div>
        </div>
    </div>
  );
}

export default SignIN;
