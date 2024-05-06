"use client"

import React, { useState } from "react";
import axios from "axios";
import { headers } from "next/headers";

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  }


  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  }


  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    } else if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3002/admin/signin', {
        email,
        password
      });

      sessionStorage.setItem('email', email);
      
      console.log('Signup successful:', response.data);
      
      setEmail('');
      setPassword('');
      setError('');
      window.location.href = './dashboard';
    } 
    catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again later.');
    }
  };


  const isValidEmail = (email:string) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <div className="m-4 p-40">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-4xl font-medium text-gray-900 dark:text-white">SignIn</h1>
            <hr />
          </div>
          {error && <p>{error}</p>}
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input onChange={handleEmailChange} value={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input onChange={handlePasswordChange} value={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <button type="submit" className="text-white bg-lime-400 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </>
  );
};
