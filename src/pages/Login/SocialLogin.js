import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const [token] = useToken(googleUser);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // Sign In with Google.
  const handleGogleLogin = () => {
    signInWithGoogle();
  }

  if (token) {
    toast.success('Sign in User:', googleUser);
    navigate(from, { replace: true });
  }

  useEffect(() => {
    if (googleError) {
      toast.error(googleError.message)
    }

  }, [googleError])


  return (
    <div className='flex justify-center mb-12'>
      <button className='bg-white border w-3/4 p-3 rounded-full' onClick={handleGogleLogin}><FcGoogle className='inline text-2xl mr-3' />Continue with Google</button>
    </div>
  );
};

export default SocialLogin;