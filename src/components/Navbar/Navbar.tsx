import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo/logo.svg'
import navIcon from '../../../public/logo/navicon.svg'

const Navbar = () => {
    return (
        <div className='flex w-full px-14 py-5 border-b-2'>
            <div className='w-6/12  flex'>
                <Image src={logo} alt={''} />
                {/* <h1>Byee</h1> */}
            </div>
            <div className='w-6/12 flex justify-end '>
                <Image src={navIcon} alt={''} />
            </div>
        </div>
    )
}

export default Navbar