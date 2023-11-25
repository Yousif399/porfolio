import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-fuchsia-300'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-700'>
                        About
                    </p>
                    <p className='text-xl mt-20 font-bold '>Hello! I'm Yousif, a junior full-stack developer . My journey into web development has equipped me with a good foundation in HTML, CSS, Python, and JavaScript. I'm particularly enthusiastic about crafting interactive and responsive web applications using frameworks like React, Flask, Bootstrap, and Tailwind.
</p>
                    <br />
                    <p className='text-xl font-bold'>My experiences have honed my skills in both frontend and backend development, with a focus on creating seamless user experiences. I'm passionate about learning and always eager to tackle new challenges. Let's collaborate on exciting projects and bring innovative ideas to life!</p>

                </div>
            </div>
        </div>
    )
}

export default About




