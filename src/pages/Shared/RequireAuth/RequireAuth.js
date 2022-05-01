import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
  let [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  if (loading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const handleSendEmail = async () => {
    await sendEmailVerification();
    toast.success('Varification Email Sent to Email.')
  }
  if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-sky-100 w-2/3 border-2 border-sky-200 rounded-lg shadow-md text-center py-20'>
          <p className='text-4xl text-red-600'>Your Email is Not Varified</p>
          <p className='text-xl mt-2'>Please varify Your Email Address.</p>
          <button onClick={handleSendEmail} className='bg-red-600 text-white px-12 py-3 text-xl uppercase rounded-md mt-3'>Send me varification email</button>
        </div>
      </div>
    )
  }

  return children;
};

export default RequireAuth;