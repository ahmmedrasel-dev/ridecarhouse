import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { carId } = useParams();
  return (

    <>
      <div className='container mx-auto my-12 border p-4'>
        <h1 className='text-center underline text-2xl uppercase text-sky-500 mb-8'>Product Details</h1>
        <div className="flex gap-4">
          <div className='bg-gray-100 border-2 p-4 h-88 w-1/3 flex items-center'>
            <img className="" src="https://i.ibb.co/0MvChPS/car6.png" alt="" />
          </div>
          <div className="border w-2/3 p-2">
            <table className='w-full flex flex-col'>
              <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                <td className='col-span-1 bg-gray-100 p-2'>Car Model Name:</td>
                <td className='col-span-2 bg-gray-100 p-2'>this is product name</td>
              </tr>

              <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                <td className='col-span-1 bg-gray-100 p-2'>Brand Name:</td>
                <td className='col-span-2 bg-gray-100 p-2'>this is product name</td>
              </tr>

              <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                <td className='col-span-1 bg-gray-100 p-2'>Total Quantity:</td>
                <td className='col-span-2 bg-gray-100 p-2'>this is product name</td>
              </tr>

              <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                <td className='col-span-1 bg-gray-100 p-2'>Price:</td>
                <td className='col-span-2 bg-gray-100 p-2'>this is product name</td>
              </tr>

              <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                <td className='col-span-1 bg-gray-100 p-2'>Prodcut Detaisl:</td>
                <td className='col-span-2 bg-gray-100 p-2'>this is product name this is product name this is product name this is product name</td>
              </tr>
              <tr className='grid grid-cols-3 px-4 py-2 gap-2'>
                <td className='text-center col-span-3'><button className='shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded'>Delivered</button></td>
              </tr>
            </table>

          </div>

          <div className='flex flex-col'>
            <h2 className='text-2xl mb-2'>Add Quanity</h2>
            <form className='border-2 p-4'>
              <label htmlFor="qunatity">Quanity</label>
              <input className="bg-white  mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-password" type="text" placeholder="number of quanity" name='qunatity' id="qunatity" />
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