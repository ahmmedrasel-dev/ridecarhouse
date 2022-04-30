import React from 'react';
import useCars from '../../Hooks/useCars';
import Car from '../Car/Car';

const InventoryItems = () => {
  const [cars] = useCars()
  return (
    <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1'>
      {
        cars.map(car => <Car
          key={car._id}
          car={car}></Car>)
      }
    </div>
  );
};

export default InventoryItems;