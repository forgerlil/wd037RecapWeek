import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toastError, toastSuccess } from '../lib/toastify';

const ulStyles = {
  dropdown:
    'fixed top-16 right-5 text-black dark:text-white bg-slate-200 dark:bg-slate-800 rounded text-base',
  expanded: 'sm:flex justify-end items-center hidden sm:block mr-4',
};

const MenuList = ({
  dropdown = false,
  isAuth,
  setIsAuth,
  setUser,
  setGotCookie,
}) => {
  const logout = async () => {
    try {
      const { status } = await axios(
        `${import.meta.env.VITE_API_URL}/users/logout`,
        { withCredentials: true }
      );
      if (status === 200) {
        setIsAuth(false);
        setUser(null);
        setGotCookie(false);
        toastSuccess('Logged out');
      }
    } catch (error) {
      toastError(error.message);
    }
  };

  return (
    <ul className={dropdown ? ulStyles.dropdown : ulStyles.expanded}>
      <li className='mx-4 my-2'>
        <Link to='/'>Home</Link>
      </li>
      {!isAuth ? (
        <>
          <li className='mx-4 my-2'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='mx-4 my-2'>
            <Link to='/register'>Register</Link>
          </li>
        </>
      ) : (
        <>
          <li className='mx-4 my-2'>
            <Link to='/auth/addDuck'>Add my Duck</Link>
          </li>
          <li className='mx-4 my-2 hover:cursor-pointer' onClick={logout}>
            Logout
          </li>
        </>
      )}
    </ul>
  );
};

const NavBar = (props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const showDropdown = (e) => {
    e.stopPropagation();
    setToggleDropdown((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('click', () => {
      setToggleDropdown(false);
    });
  }, []);

  return (
    <div className='fixed w-screen mt-[-1px] h-12 bg-amber-500 dark:bg-yellow-600 flex justify-end'>
      <div
        className='sm:hidden text-3xl flex items-center p-4'
        onClick={showDropdown}
      >
        <RxHamburgerMenu />
        {toggleDropdown && <MenuList dropdown {...props} />}
      </div>
      <MenuList {...props} />
    </div>
  );
};

export default NavBar;
