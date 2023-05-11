import { Routes, Route } from 'react-router-dom';
import {
  AddDuck,
  DebuggingDuck,
  Home,
  Layout,
  Login,
  NotFound,
  ProtectedRoute,
  Register,
  ShowShibas,
} from './pages';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toastError } from './lib/toastify';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [gotCookie, setGotCookie] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/users/me`,
          {
            withCredentials: true,
          }
        );
        setUser(data);
        setIsAuth(true);
      } catch (error) {
        if (error.response.status !== 400) toastError(error.message);
      }
    };
    checkToken();
  }, [gotCookie]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUser={setUser}
              setGotCookie={setGotCookie}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path='/duck/:id' element={<DebuggingDuck />} />
          <Route path='auth' element={<ProtectedRoute isAuth={isAuth} />}>
            <Route path='addDuck' element={<AddDuck {...user} />} />
          </Route>
          <Route
            path='login'
            element={<Login isAuth={isAuth} setGotCookie={setGotCookie} />}
          />
          <Route
            path='register'
            element={<Register isAuth={isAuth} setGotCookie={setGotCookie} />}
          />
          <Route path='/showshibas' element={<ShowShibas />} />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
