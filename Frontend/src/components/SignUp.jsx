import React, { useEffect } from 'react'
import logo from "../assets/img/logo_2.png";

export default function SignUp() {

    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
      fetchData()
    }, [])
    

    return (
        <div
            className="bg-[url('https://img.freepik.com/premium-photo/colorful-background-with-multicolored-edges-colorful-background_1269642-41968.jpg?semt=ais_hybrid')] bg-cover bg-center h-screen flex justify-center items-center"
        >
            <div className="bg-[#ffffff4d] p-8 shadow-lg max-w-sm w-full">
                <div className="flex justify-center">
                <img src={logo} alt="logo" className='w-36 object-contain' />
                </div>
                <p className="text-center text-gray-700 mb-6 text-sm">
                    Sign up to see photos and videos <br /> from your friends
                </p>
                <div className="space-y-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                    </div>
                </div>
                <p className="text-center text-xs text-gray-600 mt-4 mb-6">
                    By signing up, you agree to our Terms <br /> Privacy Policy and Cookies
                    Policy.
                </p>
                <div className="flex justify-center">
                    <button className="w-full py-2 px-4 bg-blue-500 text-white rounded text-sm">
                        Sign Up
                    </button>
                </div>
                <p className="text-center text-sm text-gray-700 mt-4">
                    Already have an account?{' '}
                    <a href="/signin" className="text-blue-500 font-medium hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    )
}
