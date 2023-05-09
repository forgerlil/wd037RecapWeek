import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [myState, setMyState] = useState('Arnaud');

  useEffect(() => {
    (async () => {
      const getDucks = await axios(
        'https://wd037-ducks-backend.onrender.com/ducks'
      );
      console.log(getDucks);
    })();
  }, []);

  return (
    <main className='w-full flex flex-col items-center mt-[-1px] h-fit'>
      <div className='w-fit mt-28 p-4 flex flex-col items-center'>
        <h1 className='text-3xl font-semibold mb-8'>Rubber Duck Selector</h1>
        <button onClick={() => setMyState('Riddhi')}>Change name</button>
        <h3 className='text-lg font-thin mb-12'>
          Here&apos;s a selection of {myState}&apos;s Rubber Ducks, gathered in
          one place by all users. May they assist you in your debugging journey.
        </h3>
        <hr className='w-1/3' />
        <section
          id='ducks'
          className='w-fit my-4 p-4 rounded flex flex-wrap justify-center'
        >
          <div className='text-xl font-thin'>
            No ducks to display. Where could they be?
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
