import React from 'react';
import useCars from '../../Hooks/useCars';
import Car from '../Car/Car';

const InventoryItems = () => {
  const [cars, loading] = useCars()
  const carsHome = cars.slice(0, 6);
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
    </div>
  );
};

export default InventoryItems;