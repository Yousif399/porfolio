import React from 'react'
import calculator from '../pics/calculator.jpg'
import spotiy from '../pics/spotiy.jpg'
import bikes from '../pics/bikes.jpg'
import weather from '../pics/weather.jpg'
import pokemon from '../pics/pokemon.png'
import watchit from '../pics/watchit.png'
// import { Link } from 'react-scroll'



const Portfolio = () => {
    const projects = [
        {
            name :'Watch IT',
            id: 1,
            src: watchit,
            link: 'https://watch-it99.netlify.app/',
            git : 'https://github.com/Yousif399/CT-final-project'
        },
        {
            name :'Pokemon App',
            id: 2,
            src: pokemon,
            link: 'https://pokemon-l15a.onrender.com/',
            git : 'https://github.com/Yousif399/wk5-dy2-flask/tree/yousif-b/app'
        },
        {
            name :'Bikes Shop',
            id: 3,
            src: bikes,
            link: 'https://shop-bikes99.netlify.app/',
            git : 'https://github.com/Yousif399/wk9-dy4-project/tree/main/src'
        },
        {
            name :'Weather App',
            id: 4,
            src: weather,
            link: 'https://weather9app9.netlify.app/',
            git : 'https://github.com/Yousif399/wk7-dy4-app-project/tree/main/weather-ap'
        },
        {
            name :'Spotiy',
            id: 5,
            src: spotiy,
            link: 'https://shiny-cucurucho-f89ed7.netlify.app/',
            git : 'https://github.com/Yousif399/spotify'
        },
        {
            name :'Calculator',
            id: 6,
            src: calculator,
            link: 'https://count9count.netlify.app/',
            git : 'https://github.com/Yousif399/calculator'
        },
    ]
    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='text-2xl py-6' >my projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-15 sm:px-0'>
                    {
                        projects.map(({name, id, src,link,git }) => (

                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                                <h4 className='pb-5 px-2 flex justify-center font-bold'>{name}</h4>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-110' />
                                <div className='flex items-center justify-center' >
                                   <a href={lin} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150' target='_blank'  rel="noreferrer">Demo </a>
                                    <a href={git} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150' target='_blank' rel="noreferrer">Code</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Portfolio