"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Signup from './Signup';
import { notesStore } from '../zustandStore';

const Login = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const isloginState = notesStore((state) => state.toggleLogin);

    const handleChange = (e) => {
        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleLogin = () => {
        const { email, password } = loginData;
        const savedUser = JSON.parse(localStorage.getItem('signupData'));

        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        if (!savedUser) {
            alert('No user found. Please register first.');
            return;
        }

        if (email === savedUser.email && password === savedUser.password) {
            alert('Login successful!');
            isloginState(true)
            router.push('/notes');
        } else {
            alert('Invalid credentials.');
        }
    };

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            {isLogin ? (
                <div className='border-2 border-amber-400 p-7'>
                    <h1 className='text-center p-3 font-semibold'>Login</h1>
                    <div className='flex flex-col m-3'>
                        <label>Email</label>
                        <input
                            name='email'
                            placeholder='Email'
                            className='border border-gray-400 rounded-sm p-1'
                            value={loginData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col m-3'>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='border border-gray-400 rounded-sm p-1'
                            value={loginData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex justify-center gap-10 py-2'>
                        <button
                            className='bg-orange-300 px-2 cursor-pointer rounded-sm border-none text-sm'
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <button
                            className='bg-sky-300 px-2 cursor-pointer rounded-sm border-none text-sm'
                            onClick={() => setIsLogin(false)}
                        >
                            Register
                        </button>
                    </div>
                </div>
            ) : (
                <Signup setIsLogin={setIsLogin} />
            )}
        </div>
    );
};
export default Login
