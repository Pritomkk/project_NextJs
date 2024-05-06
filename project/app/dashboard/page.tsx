"use client"
import { useState } from 'react';
import axios from 'axios';

const DeleteProfile = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);


  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      
      const email = sessionStorage.getItem('email');
      console.log(email);
      await axios.delete('http://localhost:3002/admin/deleteAdminProfile', 
      { data: { email }});
      setDeleteSuccess(true);
  
      window.location.href = './about';
      
    } 
    catch (error) {
      console.error('Error deleting profile:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className='p-48 m-9 flex-row'>
       <div>
        {deleteSuccess ? (
          <p className="text-green-500">Profile deleted successfully!</p>
        ) : (
          <button 
            className="text-white bg-lime-400 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            onClick={handleDelete} 
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete Profile'}
          </button>
        )}
       </div>
    </div>
  );
};

export default DeleteProfile;
