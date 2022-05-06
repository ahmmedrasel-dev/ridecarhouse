import React from 'react';
import { AiFillCar, AiOutlineBranches } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'
import CountUp from 'react-countup';


const Counts = () => {
  return (
    <div className='bg-sky-500 p-16 flex-col justify-center itmes-cemter'>
      <div className='container mx-auto grid lg:grid-cols-4 gap-4 sm:grid-cols-1'>
        <div className='flex flex-col justify-start items-center'>
          <div className='w-20 h-20 rounded-full border-4 flex items-center justify-center'>
            <AiFillCar className='text-5xl text-white' />
          </div>
          <CountUp className='text-6xl text-white py-3' delay={2} end={2000} />
          <h2 className='text-white text-xl uppercase'>Cars In Stock</h2>
        </div>

        <div className='flex flex-col justify-start items-center'>
          <div className='w-20 h-20 rounded-full border-4 flex items-center justify-center'>
            <HiUserGroup className='text-5xl text-white' />
          </div>
          <CountUp className='text-6xl text-white py-3' delay={2} end={3000} />
          <h2 className='text-white text-xl uppercase'>Happy Clients</h2>
        </div>

        <div className='flex flex-col justify-start items-center'>
          <div className='w-20 h-20 rounded-full border-4 flex items-center justify-center'>
            <AiOutlineBranches className='text-5xl text-white' />
          </div>
          <CountUp className='text-6xl text-white py-3' delay={2} end={100} />
          <h2 className='text-white text-xl uppercase'>Our Branches</h2>
        </div>

        <div className='flex flex-col justify-start items-center'>
          <div className='w-20 h-20 rounded-full border-4 flex items-center justify-center'>
            <FaUsers className='text-5xl text-white' />
          </div>
          <CountUp className='text-6xl text-white py-3' delay={2} end={70} />
          <h2 className='text-white text-xl uppercase'>Our Supliers</h2>
        </div>

      </div>
    </div>
  );
};

export default Counts;