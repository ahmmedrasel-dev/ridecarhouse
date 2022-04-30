import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CarDetails.css'

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({})

  useEffect(() => {
    try {
      const getCar = async () => {
        const response = await axios.get(`https://ridecarhouse.herokuapp.com/car/${id}`);
        setCar(response.data);
      }
      getCar()
    }
    catch (error) {
      toast.error(error.message)
    }
  }, [])
  return (

    <>
      <div className='container mx-auto my-12 border p-4'>
        <h1 className='text-center underline text-2xl uppercase text-sky-500 mb-8'>Product Details</h1>
        <div className="lg:flex lg:flex-row lg:gap-4 sm:flex-col sm:mb-4">
          <div className='bg-gray-100 border p-4 h-88 lg:w-1/3 flex items-center'>
            <img className="" src={car.picture} alt="" />
          </div>

          <div className="border lg:w-2/3 lg:p-2 car-details">
            <table className='w-full flex flex-col'>
              <tbody>
                <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                  <td className='col-span-1 bg-gray-100 p-2'>Car Model Name:</td>
                  <td className='col-span-2 bg-gray-100 p-2'>{car.car_name}</td>
                </tr>

                <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                  <td className='col-span-1 bg-gray-100 p-2'>Brand Name:</td>
                  <td className='col-span-2 bg-gray-100 p-2'>{car.brand}</td>
                </tr>

                <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                  <td className='col-span-1 bg-gray-100 p-2'>Total Quantity:</td>
                  <td className='col-span-2 bg-gray-100 p-2'>{car.quantity}</td>
                </tr>

                <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                  <td className='col-span-1 bg-gray-100 p-2'>Price:</td>
                  <td className='col-span-2 bg-gray-100 p-2'>{car.price}</td>
                </tr>

                <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                  <td className='col-span-1 bg-gray-100 p-2'>Prodcut Detaisl:</td>
                  <td className='col-span-2 bg-gray-100 p-2'>{car.product_details}</td>
                </tr>
                <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                  <td className='text-center col-span-3'><button className='shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded'>Delivered</button></td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className='flex flex-col border p-2'>
            <h2 className='text-2xl mb-2'>Add Quanity</h2>
            <form className='border p-4'>
              <label htmlFor="qunatity">Quanity</label>
              <input className="bg-white  mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" type="text" placeholder="Number of quanity" name='qunatity' id="qunatity" />
              <button className="shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" type="submit">
                Add Quantity
              </button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default CarDetails;