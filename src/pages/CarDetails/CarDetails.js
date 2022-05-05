import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CarDetails.css'

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({})
  const [quantity, setQuantity] = useState({});

  const handleDeliver = (id, quanity) => {
    try {
      const postData = async () => {
        const newQuanity = quanity - 1;
        const url = `https://ridecarhouse.herokuapp.com/delivered/${id}`;
        const { data } = await axios.put(url, { newQuanity })
        setCar(data);
        toast.success('Dalivery Complate.')
      }
      postData();
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  const handleQty = e => {
    const qty = e.target.value
    setQuantity(qty)
  }
  const handleSubmit = event => {
    event.preventDefault();
    try {
      if (Object.keys(quantity).length !== 0) {
        const postQty = async () => {
          const url = `https://ridecarhouse.herokuapp.com/add-quanity/${id}?oldQty=${car.quantity}`
          const { data } = await axios.put(url, { quantity });
          event.target.reset();
          toast.success(data.message)
        }
        postQty();
      }
      else {
        return toast.error('Please Added Your Quantity.')
      }
    }
    catch (error) {
      toast.error(error.message)
    }

  }
  useEffect(() => {
    try {
      const getCar = async () => {
        const { data } = await axios.get(`https://ridecarhouse.herokuapp.com/car/${id}`);
        setCar(data);
      }
      getCar()
    }
    catch (error) {
      toast.error(error.message)
    }
  }, [car])

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
                  <td className='text-center col-span-3'><button className='shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded' onClick={() => handleDeliver(car._id, car.quantity)}>Delivered</button></td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className='flex flex-col border p-2'>
            <h2 className='text-2xl mb-2'>Add Quanity</h2>
            <form className='border p-4' onSubmit={handleSubmit}>
              <label htmlFor="qunatity">Quanity</label>
              <input className="bg-white  mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" type="number" placeholder="Number of quanity" onChange={handleQty} id="qunatity" min={0} />

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