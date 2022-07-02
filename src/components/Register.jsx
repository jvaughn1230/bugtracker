import React from 'react';

function Register() {   
  return (
    <div className='max-w-lg my-0 mx-auto h-80 justify-self-center self-center shadow-orange-50 shadow-xl'>
            <h1 className='text-5xl m-8 '> Register </h1>
            <div className='m-8 flex justify-between'>
                <label className='pr-4'>Name:</label>
                <input className='rounded' type='password' />
            </div>
            <div className='m-8 flex justify-between'>
                <label className='pr-4'>User Name:</label>
                <input className='rounded' type='text' /> 
            </div>
            <div className='m-8 flex justify-between'>
                <label className='pr-4'>Password:</label>
                <input className='rounded' type='password' />
            </div>
        </div>
    );
}

export default Register;