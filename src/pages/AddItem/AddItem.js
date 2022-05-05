import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [carItem, setCarItem] = useState({
    email: '',
    car_name: '',
    picture: '',
    price: '',
    quantity: '',
    suplier: '',
    brand: '',
    product_details: ''
  });

  const handleInput = event => {
    carItem[event.target.name] = event.target.value;
  }
  const handleForm = event => {
    event.preventDefault();
    let newCarItem = { ...carItem, email: user.email };

    try {
      const postData = async () => {
        const { data } = await axios.post('https://ridecarhouse.herokuapp.com/add-car', newCarItem);
        if (!data.success) {
          return toast.error(data.error)
        }
        event.target.reset();
        toast.success(data.message)
      }
      postData()
    }
    catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <>
      <h2 className='text-center uppercase text-4xl mt-4'>Add Items</h2>
      <div className='md:w-2/4 w-4/4 bg-slate-200 mx-4 md:mx-auto md:container my-8 py-8 md:px-12 rounded-lg'>
        <form className="md:w-full mx-4" onSubmit={handleForm}>
          <div className="md:flex md:items-center mb-6 w-6/6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                User Email:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skye-500" id="inline-full-name" type="email" value={user?.email} readOnly disabled />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6 w-6/6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Car Model Name:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-full-name" type="text" placeholder='Toyta Colora 2018' onBlur={event => handleInput(event)} name='car_name' />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Picture:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-password" type="text" placeholder="Image Url" onBlur={event => handleInput(event)} name='picture' />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Price:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-password" type="text" placeholder="131323" onBlur={event => handleInput(event)} name='price' />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Quantity:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-password" type="text" placeholder="12" onBlur={event => handleInput(event)} name='quantity' />
            </div>
          </div>


          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Brand Name:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-password" type="text" placeholder="Toyota" onBlur={event => handleInput(event)} name='brand' />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Suplier Name:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="inline-password" type="text" placeholder="Habibur Rahman" onBlur={event => handleInput(event)} name='suplier' />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Product Details:
              </label>
            </div>
            <div className="md:w-5/6">
              <textarea className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" onBlur={event => handleInput(event)} name='product_details'>
              </textarea>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-2/4" type="submit">
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </>

  );
};

export default AddItem;