import React from 'react';
import { Link } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer p-4 bg-neutral text-neutral-content">
      <div className="container mx-auto flex items-center justify-between">
        <div className="items-center grid-flow-col">
          <strong className='text-white'>&copy; {year} | All rights reserved. </strong>
        </div>
        <div className="flex justify-end">
          <Link className='px-2 hover:text-sky-500' to='facebook'><ImFacebook /></Link>
          <Link className='px-2 hover:text-sky-500' to='facebook'><BsTwitter /></Link>
          <Link className='px-2 hover:text-sky-500' to='facebook'><BsInstagram /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;