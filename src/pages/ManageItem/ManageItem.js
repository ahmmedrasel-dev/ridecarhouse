import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../../Hooks/useCars';


const ManageItem = () => {
  const [cars, setCars, loading, setLoading] = useCars()

  const handleDelete = async id => {
    const confirm = window.confirm('Are you sure you want to delete?')
    if (confirm) {
      const { data } = await axios.delete(`https://ridecarhouse.herokuapp.com/car/${id}`);
      if (data.deletedCount > 0) {
        const remaingItem = cars.filter(car => car._id !== id);
        setCars(remaingItem)
      }
    }
  }

  const navigate = useNavigate()
  const navigateToDetail = id => {
    navigate(`/car/${id}`);
  }


  return (
    <>
      {
        loading ?
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto my-72">
            < div className="animate-pulse flex space-x-4" >
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
            </div >
          </div >

          :
          <div className='container mx-auto h-screen'>
            <div className='mt-5 text-center'>
              <h2 className='text-4xl uppercase text-red-500'>My Added Items</h2>
            </div>
            <table className='w-full mt-5 border-2'>
              <thead>
                <tr>
                  <th className='border-2 md:text-left md:pl-4 text-center bg-sky-500 text-white'>Car Name</th>
                  <th className='border-2 py-3 bg-sky-500 text-white'>Brand Name</th>
                  <th className='border-2 py-3 bg-sky-500 text-white'>Quanity</th>
                  <th className='border-2 py-3 bg-sky-500 text-white'>Price</th>
                  <th className='border-2 py-3 bg-sky-500 text-white'>Images</th>
                  <th className='border-2 py-3 bg-sky-500 text-white'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cars.map(item => (
                    <tr key={item._id} >
                      <td className="border md:pl-4">{item.car_name}</td>
                      <td className="border text-center">{item.brand}</td>
                      <td className="border text-center">{item.quantity}</td>
                      <td className="border text-center">{item.price}</td>
                      <td className="border text-center"><img className='w-20 mx-auto' src={item.picture} alt="" /></td>
                      <td className='border text-center'><button className='bg-green-600 py-2 px-4 text-white rounded-md m-2' onClick={() => navigateToDetail(item._id)} >View</button><button className='bg-red-600 py-2 px-4 text-white rounded-md m-2' onClick={() => { handleDelete(item._id) }}>Delete</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
      }
    </>
  );
};

export default ManageItem;