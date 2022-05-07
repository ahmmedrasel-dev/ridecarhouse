import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../../Hooks/useCars';
import Car from '../Car/Car';

const InventoryItems = () => {
  const [cars, loading] = useCars()
  const carsHome = cars.slice(0, 6);
  const navigate = useNavigate()
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-4xl mb-8 text-sky-500 uppercase border-2 inline-block p-3 rounded-md'> Inventory Items</h2>
      </div>
      <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1'>
        {
          carsHome.map(car => <Car
            key={car._id}
            car={car}
            loading={loading}
          ></Car>)
        }
      </div>
      <div className='text-center mt-8'>
        <button onClick={() => navigate('/manage-item')} className='bg-red-500 text-white px-8 py-3 rounded-md uppercase'>Manage Inventory</button>
      </div>
    </div>
  );
};

export default InventoryItems;