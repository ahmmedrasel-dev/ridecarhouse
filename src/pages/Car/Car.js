import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css';

const Car = ({ car }) => {

  const { car_name, picture, price, quantity, brand, product_details, suplier
  } = car;
  return (
    <div className='bg-white py-8  px-4 border-2 border-gray-200 car hover:drop-shadow-md'>
      <h2 className='brandName text-center uppercase text-4xl'>{brand}</h2>
      <hr />
      <img className='py-4' src={picture} alt="" />
      <p className='text-4xl uppercase'>Price: <span className='text-sky-500 text-4xl'>${price}</span></p>
      <hr />
      <div className='py-4'>
        <p>Model Name: {car_name}</p>
        <p>Total Quanity: {quantity}</p>
        <p>Suplier Name: {suplier}</p>
      </div>
      <hr />
      <div className='py-4'>
        <p title={product_details}>{product_details.slice(0, 120) + '...'}</p>
      </div>
      <hr />
      <Link to={`car/${car._id}`}>
        <button className='bg-sky-500 w-full p-2 text-white uppercase rounded mt-4'>Update</button>
      </Link>
    </div >
  );
};

export default Car;