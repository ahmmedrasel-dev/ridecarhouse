import React from 'react';
import useCars from '../../Hooks/useCars';
import Car from '../Car/Car';

const InventoryItems = () => {
  const [cars] = useCars()
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        cars.map(car => <Car
          key={car._id}
          car={car}></Car>)
      }
    </div>
  );
};

export default InventoryItems;