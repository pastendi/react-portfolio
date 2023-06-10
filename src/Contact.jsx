import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='container max-w-6xl mx-auto px-6 py-20'>
      <h2 className='text-5xl text-white font-semibold mb-8'>Contact</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <h3 className='text-lg text-white font-medium mb-2'>Send message</h3>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='text-white font-medium block mb-1'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='text-white font-medium block mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='text-white font-medium block mb-1'
              >
                Message
              </label>
              <textarea
                id='message'
                className='w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                rows='4'
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >
              Send
            </button>
          </form>
        </div>
        <div className=' flex flex-col justify-center space-y-2'>
          <h3 className='text-3xl text-white font-medium mb-2'>
            Contact Information
          </h3>
          <p className='text-gray-300text-lg'>Kapan Kharibot, Kathmandu</p>
          <p className='text-gray-300 text-lg'>Phone: (+977) 9863513671</p>
          <p className='text-gray-300 text-lg'>
            Email: pastendisherpa26@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
