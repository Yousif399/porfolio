import React from 'react'

const Skills = () => {
    const skills = [

        {
            id: 1,
            src: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
            title: 'Javascript',
            style: 'shadow-yellow-500',
            color: 'text-yellow-500'
        },
        {
            id: 2,
            src: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
            title: 'Python',
            style: 'shadow-yellow-500',
            color: 'text-yellow-500'
        },
        {
            id: 3,
            src: 'https://cdn-icons-png.flaticon.com/128/2772/2772128.png',
            title: 'SQL',
            style: 'shadow-yellow-500',
            color: 'text-yellow-500'
        },
        {
            id: 4,
            src: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
            title: 'CSS',
            style: 'shadow-blue-500',
            color: 'text-blue-500'
        },
        {
            id: 5,
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB6klEQVR4Ae3WAUQrcRwH8GvtNqFQanq8FuABIYQQAEHBIwJQAy8FopAAEHgAgBAMoAIWECIttZCZAEAQ2Grd++CiV2t3NMB+fIybu//37n6/uwv6lbb61a/cyW3AAEV+s8ff2F68bZoMvVs4f1p7W3yUHe55JvrgmTr7TBKEJ7Wenfk4R7SJErxyxgz2rX178SwHRLRp8UqU4IrZTlcib1sORrovDgs8cMgqi5Q4pZkQosocAR+PW2QzKUCGbVYICXLH+GWYXZ4SQtRZZ4oRCixRYSMpwBC/yNDp/5CtFCFaNLjgjiYVJpICAHF9FeIPj0QpNZinZ1MyyDKXCZPywjkLuXi8/yvd+r7zx/gZGyMkyNI5RI3bH5QoU6URu6bMGgUCOl7uAmuUuaYRq1KmhEVuOt6WMD4OYYcTyBLY93P68PjmbdzOeSH6QptLlhns5T2cp0GU0iMarxYmNCjQLcAEFZrccUGDVkKIJ7YI+XQryMQjPJQUYIMKSxQYYYp16ilC7DKMY92974EVtskkBdik+MXjco5qQogmp5RYZJVDHlhIfCHFZxzkP3RnPh5JZrlK+RZs0SbigOx3GvV9iBnOUr4F2xwx3rspgUn2qXf5ILlnh1GCPL3+JMsw3eWTrMgAQdrqV7/69Q/G00kqrtmg8wAAAABJRU5ErkJggg==',
            title: 'Tailwind',
            style: 'shadow-blue-400',
            color: 'text-blue-400'
        },
        {
            id: 6,
            src: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png',
            title: 'React',
            style: 'shadow-blue-400',
            color: 'text-blue-400'
        },
        {
            id: 7,
            src: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
            title: 'HTML',
            style: 'shadow-orange-500',
            color: 'text-orange-500'
        },
        {
            id: 8,
            src: 'data:image/png;base64,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',
            title: 'Flask',
            style: 'shadow-white',
            color: 'text-white'
        },
        {
            id: 9,
            src: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png',
            title: 'Bootstrap',
            style: 'shadow-purple-500',
            color: 'text-purple-500'
        },

    ]
    return (
        <div name='skill' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-fuchsia-300'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6 text-xl capitalize'>skills i work with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        skills.map(({ id, src, title, style, color }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt='' className='w-20 mx-auto' />
                                <p className={`mt-4 ${color} `}>{title}</p>
                            </div>

                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Skills