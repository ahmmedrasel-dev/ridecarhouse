import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <h2 className='text-center uppercase text-4xl mt-4'>Add Items</h2>
      <div className='w-2/4 bg-slate-200 mx-auto container my-8 py-8 px-12 rounded-lg'>
        <form className="w-full">
          <div className="md:flex md:items-center mb-6 w-6/6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" for="inline-full-name">
                User Email:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" value={user?.email} readOnly />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6 w-6/6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" for="inline-full-name">
                Car Model Name:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Toyta Colora 2018' />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                Picture:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Image Url" />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                Price:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" placeholder="131323" />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                Quantity:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" placeholder="12" />
            </div>
          </div>


          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                Brand Name:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Toyta" />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                Suplier Name:
              </label>
            </div>
            <div className="md:w-5/6">
              <input className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Habibur Rahman" />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/6 text-left">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                Product Details:
              </label>
            </div>
            <div className="md:w-5/6">
              <textarea className="bg-white  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              </textarea>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-2/4" type="button">
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