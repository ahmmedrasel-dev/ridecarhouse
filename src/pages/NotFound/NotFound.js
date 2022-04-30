import React from 'react';

const NotFound = () => {
  return (
    <div className='container mx-auto flex justify-between items-center'>
      <div>
        <p className='text-8xl'>Error 404</p>
        <h1> Oops! The page you're looking for isn't here.</h1>
        <p> You might have the wrong address, or the page may have moved.</p>
        <div className='mt-4'>
          <button className='bg-sky-500 text-white p-4 rounded-md uppercase mr-2'>
            Back to homepage
          </button>
          <button className='text-white p-4 rounded-md uppercase bg-red-500'>
            Contact us
          </button>
        </div>
      </div>
      <div>
        <img className='w-75 mt-3 ms-5' src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default NotFound;