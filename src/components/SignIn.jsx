import React from 'react'

function SignIN() {
  return (
    <div className='max-w-lg my-0 mx-auto h-80 justify-self-center self-center border-white border-solid border-2 p-4'>
            <h1 className='text-5xl m-8 '> Sign In </h1>
            <div className='m-8 flex justify-between'>
                <label className='pr-4'>User Name:</label>
                <input className='rounded' type='text' /> 
            </div>
            <div className='m-8 flex justify-between'>
                <label className='pr-4'>Password:</label>
                <input className='rounded' type='password' />
            </div>
        </div>
  )
}

export default SignIN