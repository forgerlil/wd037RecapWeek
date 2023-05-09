import { Link } from 'react-router-dom';
import { useState } from 'react';

const MenuList = () => {
  return (
    <ul className='sm:flex justify-end items-center hidden mr-4'>
      <li className='mx-4 my-2'>
        <Link to='/'>Home</Link>
      </li>
      <li className='mx-4 my-2'>
        <Link to='/addDuck'>Add my Duck</Link>
      </li>
      <li className='mx-4 my-2'>
        <Link to='/login'>Login</Link>
      </li>
      <li className='mx-4 my-2'>
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  return (
    <div className='fixed w-screen mt-[-1px] h-12 bg-amber-500 dark:bg-yellow-600 flex justify-end'>
      <MenuList />
    </div>
  );
};

export default NavBar;
