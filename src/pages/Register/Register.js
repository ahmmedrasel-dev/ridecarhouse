import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import slide1 from '../../images/banner1.png'
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [registerError, setRegisterError] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    hookError,
  ] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true
  });

  const handleEmail = event => {
    const emailValidTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailValidTest.test(event.target.value);
    console.log(validEmail)
    if (validEmail) {
      setRegisterInfo({ ...registerInfo, email: event.target.value })
      setRegisterError({ ...registerError, email: '' })
    } else {
      setRegisterError({ ...registerError, email: 'Invalid Email.' })
      setRegisterInfo({ ...registerInfo, email: '' })
    }
  }

  const handlePassword = e => {
    const passwordTest = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,16}$/;
    const strongPassword = passwordTest.test(e.target.value);
    if (strongPassword) {
      setRegisterInfo({ ...registerInfo, password: e.target.value })
      setRegisterError({ ...registerError, password: '' })
    } else {
      setRegisterError({ ...registerError, password: 'Your Passowrd is to week.' })
      setRegisterInfo({ ...registerInfo, password: '' })
    }
  }


  const handleComfirmPassword = e => {

    if (registerInfo.password !== e.target.value) {
      setRegisterError({ ...registerError, confirmPassword: 'Confirmation Password not Match.' })
    } else {
      setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })
      setRegisterError({ ...registerError, confirmPassword: '' })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)
  }

  if (user) {
    toast.success('User Create Successfully.')
  }

  const handleGogleLogin = () => {
    signInWithGoogle(registerInfo.email, registerInfo.password);
  }

  if (googleUser) {
    toast.success('Sign in User:', googleUser);
    navigate(from, { replace: true });
  }

  useEffect(() => {
    if (googleError) {
      toast.error(googleError.message)
    }
    if (hookError) {
      toast.error(hookError.message)
    }
  }, [googleError, hookError])

  return (
    <div className='md:p-20' style={{ backgroundImage: `url(${slide1})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

      <div className='md:w-2/6 sm:w-4/6 md:h-82 md:mr-auto flex flex-col justify-center bg-slate-100 border-2 rounded-3xl'>
        <div className='text-center my-8'>
          <h2 className='text-4xl text-cyan-500'>Ride Car-House</h2>
          <p className=''>User Register Form using Email & Password.</p>
        </div>

        <form className='sm:w-4/4 md:w-3/4 mx-auto mt-4' onSubmit={handleSubmit}>
          <input className='block w-full p-3 rounded-md text-xl' type="email" name="" id="" placeholder='Email' onBlur={handleEmail} />

          {
            registerError?.email && <strong className='text-red-500'>{registerError.email}</strong>
          }

          <input className='block w-full p-3 my-4 rounded-md text-xl' type="password" name="" id="" placeholder='Password' onChange={handlePassword} />
          {
            registerError?.password && <strong className='text-red-500'>{registerError.password}</strong>
          }

          <input className='block w-full p-3 my-4 rounded-md text-xl' type="password" name="" id="" placeholder='Conformation Password' onChange={handleComfirmPassword} />

          {
            registerError?.confirmPassword && <strong className='text-red-500'>{registerError.confirmPassword}</strong>
          }

          <button className='w-full bg-sky-500 p-3 mb-4 rounded-md text-xl text-white'>Login</button>
          <p className='text-center mb-2'>Already Have an account? <Link className='underline text-blue-400' to='/login'>Login.</Link></p>
        </form>
        <div className='flex justify-center mb-12'>
          <button className='bg-white border w-3/4 p-3 rounded-full' onClick={handleGogleLogin}><FcGoogle className='inline text-2xl mr-3' />Continue with Google</button>
        </div>

      </div>
    </div>
  );
};

export default Register;