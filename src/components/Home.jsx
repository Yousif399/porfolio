import React from 'react'
import profile  from '../pics/profile pic.JPG'
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from 'react-scroll';




const ThisHome = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white ' >I'm, Yousif </h1>
                    <h3 className='text-gray-300 py-4  max-w-md text-lg'>
                        Full-stack developer |  Proficient in HTML, CSS, Python, JavaScript, React, Bootstrap, and Tailwind | Flask for backend | Let's create something extraordinary!

                    </h3>
                    <div>

                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-600 to-blue-900 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <RxDoubleArrowRight size={22} className='ml-3' />
                            </span>
                        </Link>
                        <Link to='skill' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-600 to-blue-900 cursor-pointer'>
                            Skills
                            <span className='group-hover:rotate-90 duration-300'>
                                <RxDoubleArrowRight size={22} className='ml-3' />
                            </span>
                        </Link>
                       
                    </div>
                    
                </div>
                <div>
                    <img src={profile} alt='firstpic' className='rounded-2xl mx-auto w-1/3 md:w-full ml-20'></img>
                </div>
            </div>
        </div>
    )
}

export default ThisHome
