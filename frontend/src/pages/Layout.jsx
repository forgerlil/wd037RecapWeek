import { ToastContainer } from 'react-toastify';
import { NavBar, Footer } from '../components';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  return (
    <>
      <ToastContainer />
      <NavBar {...props} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
