import React from 'react';
import slide1 from '../../images/slide1.jpg'
import InventoryItems from '../InventoryItems/InventoryItems';
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='md:h-96 h-72' style={{ backgroundImage: `url(${slide1})`, backgroundPosition: "center" }}>
        <div className='container mx-auto banner-content pt-16 md:pt-24'>
          <p className='text-white md:text-4xl text-2xl uppercase'>The All New</p>
          <h2 className='text-sky-500 md:text-6xl text-5xl uppercase py-2'>Mazda-mx5</h2>
          <h3 className='md:text-4xl text-2xl text-white uppercase'>Stylish & Mordern</h3>
        </div>
      </div>

      <div className='container mx-auto my-20'>
        <InventoryItems></InventoryItems>
      </div>
    </>


  );
};

export default Home;