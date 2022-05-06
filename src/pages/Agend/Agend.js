import React from 'react';

const Agend = ({ agend }) => {
  const { name, picture } = agend
  return (
    <div className='bg-slate-100 p-4 rounded-lg drop-shadow-md'>
      <img src={picture} alt="" />
      <p className='py-5 text-center text-2xl uppercase'>{name}</p>
    </div>
  );
};

export default Agend;