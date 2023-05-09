import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='addDuck' element={<div>Add a Duck</div>} />
          <Route path='duck/:id' element={<div>Single Duck</div>} />{' '}
          <Route path='*' element={<div>Page does not exist!</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
