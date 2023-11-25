import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6 text-xl capitalize'>Sumbit the form to contact me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/9dfd1ecd-6b17-46e0-bf30-d126b8b1fba0' method='POST'  className='flex flex-col w-full h-full md:w-1/2'>
                        <input type='text' name='name' placeholder='Enter Your Name' required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                        </input>
                        <input type='email' name='email' placeholder='Enter Your Email' required className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                        </input>
                        <textarea name='message'placeholder='Enter you message' rows='10' className='text-2xl p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-blue-800 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let's Talk</button>
                       
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact