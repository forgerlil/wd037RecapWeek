import { Routes, Route } from 'react-router-dom';
import {
  AddDuck,
  DebuggingDuck,
  Home,
  Layout,
  Login,
  NotFound,
  Register,
  ShowShibas,
} from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/duck/:id' element={<DebuggingDuck />} />
          <Route path='addDuck' element={<AddDuck />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='/showshibas' element={<ShowShibas />} />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
