import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const [email, setEmail] = useState([]);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handleForm = async event => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(email)
      toast.success('Rest Password Link sent to your Email!')
    }
    catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg-sky-100 w-2/3 border-2 border-sky-200 rounded-lg shadow-md text-center py-16' onSubmit={handleForm}>
        <h2 className='text-4xl uppercase'>Reset Your Password</h2>
        <p className='text-xl mt-1 uppercase'>We will sent Rest Password link to email.</p>
        <input type="email" className='block w-96 mx-auto p-3 my-3 rounded-lg border-2' placeholder='Enter your Email' onBlur={handleEmail} />
        <button className='bg-red-600 text-white px-8 py-3 text-xl uppercase rounded-md mt-3' type='submit'>Rest Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;