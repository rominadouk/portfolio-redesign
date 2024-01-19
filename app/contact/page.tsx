'use client'
import React from 'react'

const Contact = () => {
  return (
    <div className='pt-20 lg:flex lg:flex-col'>
        <h1 className='text-3xl font-semibold mb-5 mx-5 lg:ml-28'>Contact</h1>
        <div className=' bg-sage-green lg:w-1/3 lg:self-center lg:mt-10 lg:rounded'>
          <form className='flex flex-col mx-10 py-10 gap-7'>
              {/* Name Input */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' className='border h-8' />
              </div>
              {/* Email Input */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' className='border h-8'/>
              </div>
              {/* Message Input */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' className='border h-28'/>
              </div>
              {/* Submit Button */}
              <input type='submit' className=' self-center py-2 px-10 bg-button-color text-white rounded-md' />
          </form>
        </div>

        
    </div>
  )
}

export default Contact