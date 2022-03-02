import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
function Layout() {
  const [openProducts, cycleProducts] = useCycle(false, true);
  const [openOrders, cycleOrders] = useCycle(false, true);
  const [openCustomers, cycleCustomers] = useCycle(false, true);
  const [openStore, cycleStore] = useCycle(false, true);
  const [navOpen, cycleNav] = useState(false);
  const subMenu = {
    overflow: 'hidden',
    height: openProducts ? '120px' : 0,
    transition: '0.5s',
  };
  return (
    <div>
      <div
        onMouseOver={() => cycleNav(true)}
        onMouseLeave={() => cycleNav(false)}
        className={`${
          navOpen ? 'w-[288px]' : `w-[80px]`
        } transition-all duration-500 h-screen sidebar_gradient rounded-r-lg p-4 text-white`}
      >
        {/* Logo */}
        <div className='w-36 h-9 relative mx-auto mb-8'>
          <Image
            src='https://acorn-react-ecommerce-platform.coloredstrategies.com/img/logo/logo-light.svg'
            alt='logo'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            priority={true}
          />
        </div>
        {/* Proifle Image and Name */}
        <div>
          <div
            className={`relative ${
              navOpen ? 'w-12 h-12' : 'w-8 h-8'
            }  mx-auto mb-1  overflow-hidden rounded-xl`}
          >
            <Image
              src='https://acorn-react-ecommerce-platform.coloredstrategies.com/img/profile/profile-9.webp'
              alt='profile'
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>
          {navOpen && <p className='text-center text-sm'> Lisa Jackson</p>}
        </div>
        {/* Nav Items */}
        <div className='  overflow-y-auto h-[35rem] styledScroll my-8'>
          <nav className=' '>
            <ul className='flex flex-col '>
              <li className=''>
                <a className='p-3 mb-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                  <div className='flex items-center'>
                    <span className='w-5 flex '>
                      <FontAwesomeIcon icon={faStore} />
                    </span>
                    {navOpen && <span className='ml-4'>Dashboard</span>}
                  </div>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    cycleProducts(e);
                  }}
                  className='p-3 mb-3 hover:bg-white/10 block rounded-md transition ease-linear duration-300 cursor-pointer'
                >
                  <div className='flex justify-between'>
                    <div className='flex items-center'>
                      <span className='w-5 flex '>
                        <FontAwesomeIcon icon={faStore} />
                      </span>

                      {navOpen && <span className='ml-4'>Products</span>}
                    </div>
                    {navOpen && (
                      <span className='text-white'>
                        <i
                          className={`text-white arrow  ${
                            openOrders ? 'down' : 'right'
                          }`}
                        ></i>
                      </span>
                    )}
                  </div>
                </a>
                <ul
                  className={`overflow-hidden duration-500 ${
                    openProducts ? 'h-[9.5rem]' : 'h-[0px]'
                  }`}
                >
                  <li>
                    <a className='p-3 mb-3 ml-3 l block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Options1
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Options1
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Options1
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  onClick={(e) => {
                    cycleOrders(e);
                  }}
                  className='p-3 mb-3 hover:bg-white/10 block rounded-md transition ease-linear duration-300 cursor-pointer'
                >
                  <div className='flex justify-between'>
                    <div className='flex items-center'>
                      <span className='w-5 flex '>
                        <FontAwesomeIcon icon={faStore} />
                      </span>

                      {navOpen && <span className='ml-4'>Orders</span>}
                    </div>
                    {navOpen && (
                      <span className='text-white'>
                        <i
                          className={`text-white arrow  ${
                            openOrders ? 'down' : 'right'
                          }`}
                        ></i>
                      </span>
                    )}
                  </div>
                </a>
                <ul
                  className={`overflow-hidden duration-500 ${
                    openOrders ? 'h-[6rem]' : 'h-[0px]'
                  }`}
                >
                  <li>
                    <a className='p-3 mb-3 ml-3 l block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      List
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    cycleCustomers(e);
                  }}
                  className='p-3 mb-3 hover:bg-white/10 block rounded-md transition ease-linear duration-300 cursor-pointer'
                >
                  <div className='flex justify-between'>
                    <div className='flex items-center'>
                      <span className='w-5 flex '>
                        <FontAwesomeIcon icon={faStore} />
                      </span>

                      {navOpen && <span className='ml-4'>Customers</span>}
                    </div>
                    {navOpen && (
                      <span className='text-white'>
                        <i
                          className={`text-white arrow  ${
                            openCustomers ? 'down' : 'right'
                          }`}
                        ></i>
                      </span>
                    )}
                  </div>
                </a>
                <ul
                  className={`overflow-hidden duration-500 ${
                    openCustomers ? 'h-[6rem]' : 'h-[0px]'
                  }`}
                >
                  <li>
                    <a className='p-3 mb-3 ml-3 l block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      List
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    cycleStore(e);
                  }}
                  className='p-3 mb-3 hover:bg-white/10 block rounded-md transition ease-linear duration-300 cursor-pointer'
                >
                  <div className='flex justify-between'>
                    <div className='flex items-center'>
                      <span className='w-5 flex '>
                        <FontAwesomeIcon icon={faStore} />
                      </span>

                      {navOpen && <span className='ml-4'>Store</span>}
                    </div>
                    {navOpen && (
                      <span className='text-white'>
                        <i
                          className={`text-white arrow  ${
                            openStore ? 'down' : 'right'
                          }`}
                        ></i>
                      </span>
                    )}
                  </div>
                </a>
                <ul
                  className={`overflow-hidden duration-500 ${
                    openStore ? 'h-[20rem]' : 'h-[0px]'
                  }`}
                >
                  <li>
                    <a className='p-3 mb-3 ml-3 l block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Filter
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Categories
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Detail
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Cart
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a className='p-3 mb-3 ml-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
              <li className=''>
                <li className=''>
                  <a className='p-3 mb-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                    <div className='flex items-center'>
                      <span className='w-5 flex '>
                        <FontAwesomeIcon icon={faStore} />
                      </span>
                      {navOpen && <span className='ml-4'>Shipping</span>}
                    </div>
                  </a>
                </li>
              </li>
              <li className=''>
                <li className=''>
                  <a className='p-3 mb-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                    <div className='flex items-center'>
                      <span className='w-5 flex '>
                        <FontAwesomeIcon icon={faStore} />
                      </span>
                      {navOpen && <span className='ml-4'>Discount</span>}
                    </div>
                  </a>
                </li>
              </li>
              <li className=''>
                <li className=''>
                  <a className='p-3 mb-3 block hover:bg-white/10 rounded-md transition ease-linear duration-300 cursor-pointer'>
                    <div className='flex items-center'>
                      <span className='w-5 flex '>
                        <FontAwesomeIcon icon={faStore} />
                      </span>
                      {navOpen && <span className='ml-4'>Setting</span>}
                    </div>
                  </a>
                </li>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Layout;
