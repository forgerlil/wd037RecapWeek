import { ToastContainer } from 'react-toastify';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
