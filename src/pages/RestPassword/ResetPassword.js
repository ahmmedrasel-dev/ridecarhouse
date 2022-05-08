import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ResetPassword = () => {
  const [email, setEmail] = useState([]);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const handleEmail = e => {
    const email = e.target.value;
    setEmail(email)
  }

  const handleForm = async event => {
    event.preventDefault();
    try {
      if (email.length === 0) {
        toast.error('Plase Add your Email!')
      }
      await sendPasswordResetEmail(email);
      toast.success('Email Send !')
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    try {
      if (error) {
        toast.error(error.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  }, [error])

  return (
    <div className='flex justify-center items-center h-screen'>
      <PageTitle title="Reset Password"></PageTitle>
      <form className='bg-sky-100 md:w-2/3 w-80 border-2 border-sky-200 rounded-lg shadow-md text-center py-16' onSubmit={handleForm}>
        <h2 className='md:text-4xl text-2xl uppercase'>Reset Your Password</h2>
        <p className='md:text-xl text-sm mt-1 uppercase'>We will sent Rest Password link to email.</p>
        <input type="email" className='block md:w-96 w-72 mx-auto p-3 my-3 rounded-lg border-2' placeholder='Enter your Email' onBlur={handleEmail} />
        <button className='bg-red-600 text-white px-8 py-3 md:text-xl text-lg uppercase rounded-md mt-3' type='submit'>Rest Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;