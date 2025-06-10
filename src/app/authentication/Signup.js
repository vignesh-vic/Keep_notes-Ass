import React, { useState } from 'react';

const Signup = ({ setIsLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        const { username, email, password, confirmPassword } = formData;

        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        localStorage.setItem('signupData', JSON.stringify({ username, email, password }));
        alert('User data stored locally!');

        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className='border-2 border-amber-400 p-7'>
                <h1 className='text-center p-3 font-semibold'>Sign up</h1>

                <div className='flex flex-col m-3'>
                    <label>Username</label>
                    <input
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-sm p-1'
                    />
                </div>

                <div className='flex flex-col m-3'>
                    <label>Email</label>
                    <input
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-sm p-1'
                    />
                </div>

                <div className='flex flex-col m-3'>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-sm p-1'
                    />
                </div>

                <div className='flex flex-col m-3'>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className='border border-gray-400 rounded-sm p-1'
                    />
                </div>

                <div className='flex justify-center gap-10 py-2'>
                    <button
                        className='bg-orange-300 px-2 cursor-pointer rounded-sm border-none text-sm'
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                    <button
                        className='bg-sky-300 px-2 cursor-pointer rounded-sm border-none text-sm'
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
