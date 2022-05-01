import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Car.css';

const Car = ({ car, loading }) => {

  const { _id, car_name, picture, price, quantity, brand, product_details, suplier
  } = car;
  const navigate = useNavigate()

  const navigateToDetail = id => {
    navigate(`/car/${id}`);
  }

  return (
    <>
      {
        loading ?
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          :
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
            <button onClick={() => navigateToDetail(_id)} className='bg-sky-500 w-full p-2 text-white uppercase rounded mt-4'>Update</button>
          </div >
      }
    </>

  );
};

export default Car;