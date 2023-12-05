import React from 'react'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <img src={'https://img.icons8.com/?size=256&id=xuvGCOXi8Wyg&format=png'} width='50px' alt='linkedin' />
                </>
            ),
            href: 'https://www.linkedin.com/in/yousif-alammar-190346282/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <img src={'https://img.icons8.com/?size=256&id=12599&format=png'} width='50px' alt='github' />
                </>
            ),
            href: 'https://github.com/Yousif399?tab=repositories',

        },
        {
            id: 3,
            child: (
                <>
                    Resume <img src={'https://img.icons8.com/?size=256&id=CgELV9WHcecG&format=png'} width='50px' alt='resume' />
                </>
            ),
            href: 'https://publuu.com/flip-book/312440/749738',
            style: 'rounded-br-md'
        }
    ]
    return (
        <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed bg-white rounded-lg'>
            <ul>
                {links.map(({id, child,href,style}) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray ${style} `}>
                        <a href={href} className='flex justify-between items-center w-full text-black font-bold' target='_blank' rel='noreferrer' >
                            {child}
                        </a>
                    </li>
                ))} 
                {/* Linkdien <img src={'https://img.icons8.com/?size=256&id=xuvGCOXi8Wyg&format=png'} width='50px' /> */}
                {/* <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray'><a href='' className='flex justify-between items-center w-full text-black font-bold'> GitHub <img src={'https://img.icons8.com/?size=256&id=12599&format=png'} width='50px' /> </a></li> */}
                {/* <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray'><a href='' className='flex justify-between items-center w-full text-black font-bold'> Resume <img src={'https://img.icons8.com/?size=256&id=CgELV9WHcecG&format=png'} width='50px' /> </a></li> */}

            </ul>







        </div>
    )
}

export default SocialLinks;