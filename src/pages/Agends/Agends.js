import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Agend from '../Agend/Agend';

const Agends = () => {
  const [agends, setAgends] = useState([]);

  useEffect(() => {
    const getAgends = async () => {
      const { data } = await axios.get(`https://ridecarhouse.herokuapp.com/agends`);
      setAgends(data);
    }
    getAgends()
  }, [])
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-4xl mb-8 text-sky-500 uppercase border-2 inline-block p-3 rounded-md'>Our Suppliers</h2>
      </div>
      <div className='grid lg:grid-cols-4 gap-4 sm:grid-cols-1 my-8'>
        {
          agends.map(agend => <Agend
            key={agend._id}
            agend={agend}
          ></Agend>)
        }
      </div>
    </div>
  );
};

export default Agends;