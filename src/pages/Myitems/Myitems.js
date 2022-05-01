import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myitems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email

  useEffect(() => {
    const url = `http://localhost:5000/myitems?email=${email}`;
    try {
      const getData = async () => {
        const { data } = await axios.get(url);
        setItems(data)
      }
      getData();
    }
    catch {

    }
  }, [])

  return (
    <div className='container mx-auto h-screen'>
      <div className='mt-5 text-center'>
        <h2 className='text-4xl uppercase text-red-500'>My Added Items</h2>
      </div>
      <table className='w-full mt-5 border-2'>
        <thead>
          <tr>
            <th className='border-2 text-left pl-4 bg-sky-500 text-white'>Car Name</th>
            <th className='border-2 py-3 bg-sky-500 text-white'>Brand Name</th>
            <th className='border-2 py-3 bg-sky-500 text-white'>Quanity</th>
            <th className='border-2 py-3 bg-sky-500 text-white'>Price</th>
            <th className='border-2 py-3 bg-sky-500 text-white'>Images</th>
            <th className='border-2 py-3 bg-sky-500 text-white'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={item._id} >
                <td className="border pl-4">{item.car_name}</td>
                <td className="border text-center">{item.brand}</td>
                <td className="border text-center">{item.quantity}</td>
                <td className="border text-center">{item.price}</td>
                <td className="border text-center"><img className='w-20 mx-auto' src={item.picture} alt="" /></td>
                <td className='border text-center'><button className='bg-red-600 py-2 px-4 text-white rounded-md'>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Myitems;