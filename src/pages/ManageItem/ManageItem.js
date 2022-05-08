import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrAddCircle, GrView } from 'react-icons/gr'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';


const ManageItem = () => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [cars, setCars] = useState([]);


  useEffect(() => {
    setLoading(true)
    const url = `https://ridecarhouse.herokuapp.com/car?page=${selectedPage}&pageSize=${pageSize}`;
    const getData = async () => {
      const { data } = await axios.get(url);
      setCars(data);
      setLoading(false)
    }
    getData();
  }, [selectedPage, pageSize])

  useEffect(() => {
    const getPageNumber = async () => {
      const { data } = await axios.get('https://ridecarhouse.herokuapp.com/car-pages');
      const totalNumber = data.count;
      const pages = Math.ceil(totalNumber / 5);
      setPage(pages);
    }
    getPageNumber()
  }, [])


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
          <div className='container mx-auto md:h-90'>
            <PageTitle title="Manage Items"></PageTitle>
            <div className='mt-5 text-center'>
              <h2 className='md:text-4xl text-2xl uppercase text-red-500'>All Inventories Items</h2>
              <div className='flex justify-center'>
                <button className='border-2 py-2 px-5 rounded flex md:items-center justify-center hover:bg-sky-500 hover:text-white' onClick={() => navigate('/add-item')}><GrAddCircle className='px-1 text-2xl' />Add Item</button>
              </div>
            </div>
            <div className='relative overflow-x-scroll shadow-md sm:rounded-lg'>
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
                        <td className='border text-center'><button className='bg-green-600 py-2 px-4 text-white rounded-md m-2' onClick={() => navigateToDetail(item._id)} ><GrView /></button><button className='bg-red-600 py-2 px-4 text-white rounded-md m-2' onClick={() => { handleDelete(item._id) }}><RiDeleteBin6Fill /></button></td>
                      </tr>
                    ))

                  }
                </tbody>
              </table>
            </div>

            <div className='text-center mt-5'>
              {
                [...Array(page).keys()]
                  .map(number => <button
                    key={number}
                    className={selectedPage === number ? 'p-3 bg-sky-500 text-white rounded-md m-2 border-2' : 'p-3 bg-slate-100 m-2 border-2 rounded-md text-sky-500'}
                    onClick={() => setSelectedPage(number)}
                  >{number + 1}</button>)
              }

              <select onChange={e => setPageSize(e.target.value)} className='p-3 rounded-md uppercase border-2'>
                <option value="5" defaultValue>5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>
      }
    </>
  );
};

export default ManageItem;