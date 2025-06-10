"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { notesStore } from '../zustandStore';


const Navbar = () => {
    const router = useRouter()
    const isloginCheck = notesStore((state) => state.loginState);
    const isloginState = notesStore((state) => state.toggleLogin);

   
    const handleSignOut = () => {
        localStorage.removeItem('signupData')
        isloginState(false)

        router.push('/')
    }

    return (
        <div className="flex justify-between px-20 py-4 bg-blue-300">
            <p className='font-semibold'>Notes</p>
            <div >
                <ul className="flex font-semibold justify-around gap-10 ">
                    <li>About </li>
                    <li>Notes</li>
                    <li>Account</li>
                    {isloginCheck ? <li className='cursor-pointer' onClick={handleSignOut}>Logout</li> : <li className='cursor-pointer'>Login</li>
                    }
                </ul>
            </div>

        </div>
    )
}

export default Navbar
