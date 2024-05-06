"use client"

import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  // State variables for email, password, and error
  const [depName, setdepName] = useState('');
  const [date, setdate] = useState('');
  const [error, setError] = useState('Error');
  const [Sucess, setSucess] = useState('');

  // Function to handle email input change
  const h_depName = (e:any) => {
    setdepName(e.target.value);
  }

  // Function to handle password input change
  const h_date= (e:any) => {
    setdate(e.target.value);
  }

  // Function to handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    

    // Validate email format
    
    try {
    
      const response = await axios.post('http://localhost:3002/adminOperation/CreateDepartment', {
        depName,
        date
      });

      console.log('depertment create successful:', response.data);
      
      setdepName('');
      setdate('');
      setError('error');
      setSucess('depertment create successful');

      
    } 
    catch (error) {
     
      console.error(' failed:', error);
      setError('');
    }
  };

  return (
    <>
      <div className="m-4 p-40">
        <div className="bg-slate-400 p-6">
        
        {
  error && <p>{error}</p>
}
{
  Sucess && <div>{Sucess}</div>
}
        </div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-4xl font-medium text-gray-900 dark:text-white">Create Department</h1>
            <hr />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department NAme</label>
            <input onChange={h_depName} value={depName} type="depName" id=" " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Depertment Create date</label>
            <input onChange={h_date} value={date} type="date" id=" " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <button type="submit" className="text-white bg-lime-400 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </>
  );
};
