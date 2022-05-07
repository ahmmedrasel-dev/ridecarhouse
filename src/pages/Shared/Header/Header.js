import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const logOut = () => {
    signOut(auth)
  }

  return (
    <>
      <nav className="bg-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <CustomLink to='/manage-item' className="text-white mx-4 uppercase custom-menu-itm">Manage Inventory</CustomLink>
                <CustomLink to='/blogs' className="text-white mx-4 uppercase custom-menu-itm">Blogs</CustomLink>
                {
                  user ?
                    <div className='flex justify-between'>
                      <CustomLink to='/add-item' className="text-white mx-4 uppercase custom-menu-itm">Add Item</CustomLink>

                      <CustomLink to='/my-item' className="text-white mx-4 uppercase custom-menu-itm">My Item</CustomLink>
                      <CustomLink to='/' className="text-white mx-4 uppercase custom-menu-itm">{user.displayName}</CustomLink>
                      <CustomLink to='/login' className="text-white mx-4 uppercase custom-menu-itm" onClick={logOut}>Logout</CustomLink>
                    </div>
                    :
                    <div className='flex'>
                      <CustomLink to='/login' className="text-white uppercase">Login</CustomLink >
                    </div>
                }
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <CustomLink to='/manage-item' className="text-white mx-4 custom-menu-itm uppercase">Manage Inventory</CustomLink>

                <CustomLink to='/blogs' className="text-white mx-4 custom-menu-itm uppercase">Blogs</CustomLink>
                {
                  user ?
                    <div className='flex flex-col justify-between gap-2'>
                      <CustomLink to='/add-item' className="text-white mx-4 custom-menu-itm uppercase">Add Item</CustomLink>
                      <CustomLink to='/my-item' className="text-white mx-4 custom-menu-itm uppercase">My Item</CustomLink>
                      <CustomLink to='/' className="text-white mx-4 custom-menu-itm uppercase">{user.displayName}</CustomLink>
                      <CustomLink to='/login' className="text-white mx-4 custom-menu-itm uppercase" onClick={logOut}>Logout</CustomLink>

                    </div>
                    :
                    <div className='flex'>
                      <CustomLink to='/login' className="text-white uppercase custom-menu-itm mx-4">Login</CustomLink >
                    </div>
                }
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Header;