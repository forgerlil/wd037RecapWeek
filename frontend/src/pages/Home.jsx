import { useState, useEffect } from 'react';
import axios from 'axios';
import RubberDuckCard from '../components/RubberDuckCard';
import { Loading } from '../components';
import { toastError } from '../lib/toastify';

const Home = () => {
  const [allDucks, setAllDucks] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/ducks`);
        setAllDucks(data);
        setLoading(false);
      } catch (error) {
        toastError(
          error.message || 'Ducks have gone over the hill and far away.'
        );
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className='w-full flex flex-col items-center mt-[-1px] dark:bg-slate-700 h-fit'>
      <div className='w-fit mt-28 p-4 flex flex-col items-center'>
        <h1 className='text-3xl font-semibold mb-8'>Rubber Duck Selector</h1>
        <h3 className='text-lg font-thin mb-12'>
          Here&apos;s a selection of Rubber Ducks, gathered in one place by all
          users. May they assist you in your debugging journey.
        </h3>
        <hr className='w-1/3' />
        <section
          id='ducks'
          className='w-fit my-4 p-4 rounded flex flex-wrap justify-center'
        >
          {loading ? (
            <Loading />
          ) : allDucks ? (
            allDucks.map((duck) => <RubberDuckCard key={duck._id} {...duck} />)
          ) : (
            <div className='text-xl font-thin'>
              No ducks to display. Where could they be?
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
