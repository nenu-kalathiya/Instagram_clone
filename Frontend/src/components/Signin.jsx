import React from 'react'
import logo from "../assets/img/logo_2.png";

export default function Signin() {
  return (
    <div
      className="bg-[url('https://img.freepik.com/premium-photo/colorful-background-with-multicolored-edges-colorful-background_1269642-41968.jpg?semt=ais_hybrid')] bg-cover bg-center h-screen flex justify-center items-center"
    >
      <div className="bg-[#ffffff4d] p-8 shadow-lg max-w-sm w-full ">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className='w-36 object-contain' />
        </div>
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
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded text-sm">
            Sign In
          </button>
        </div>
        <p className="text-center text-sm text-gray-700 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
