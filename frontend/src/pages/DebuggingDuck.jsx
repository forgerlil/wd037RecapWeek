import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TypeWriter from 'typewriter-effect';
import { toastError } from '../lib/toastify';
import { Loading } from '../components';

const DebuggingDuck = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [duck, setDuck] = useState();
  const [loading, setLoading] = useState(false);

  const [isAsking, setIsAsking] = useState(false);
  const [{ question, answer }, setForm] = useState({
    question: '',
    answer: '',
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/ducks/${id}`
        );
        setDuck(data);
        setLoading(false);
      } catch (error) {
        toastError(error.message);
        setLoading(false);
      }
    })();
  }, []);

  const askDuck = async (e) => {
    try {
      e.preventDefault();
      const {
        data: { duckSays },
      } = await axios.post(`${import.meta.env.VITE_API_URL}/ducks/${id}`, {
        input: question,
      });
      setForm((prev) => ({ ...prev, answer: '' }));
      setTimeout(
        () =>
          setForm((prev) => ({
            ...prev,
            answer: `${duck.name} says: ${duckSays}`,
          })),
        500
      );
    } catch (error) {
      error.response
        ? error.response.data.error.forEach((err) => toastError(err))
        : toastError(error.message);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, question: value }));
  };

  return loading ? (
    <Loading />
  ) : duck ? (
    <main className='w-full h-screen mt-[-1px] overflow-hidden flex flex-col items-center justify-center'>
      <div className='mt-4 mb-8 p-4 bg-slate-100 dark:bg-slate-600 rounded flex flex-col items-center transition-all duration-300'>
        <p className='mb-4 text-2xl font-semibold'>Hello there!</p>
        <p className='mb-1 font-thin'>
          I am {duck.name}, and I will assist you with your debugging for this
          session.
        </p>
        <p className='mb-1 font-thin'>
          Please explain me your code in an engaging manner, and it&apos;s ok to
          get passionate.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='p-12 pb-8 bg-slate-100 dark:bg-slate-600 rounded flex flex-col items-center transition-all duration-300'>
          <img
            className='w-80 h-80 object-cover rounded'
            src={duck.image}
            alt='duck'
          />
          <p className='mt-8 text-xl font-thin'>
            {duck.quote ?? 'Whenever you are ready!'}
          </p>
        </div>
        {isAsking && (
          <form onSubmit={askDuck} className='flex flex-col items-center'>
            <textarea
              id='askDuck'
              className='resize-none bg-inherit px-4 py-2 focus:outline-none w-[25ch] sm:w-[50ch] h-36 md:h-28 bg-slate-100 dark:bg-slate-600 rounded transition-all duration-300'
              value={question}
              onChange={handleChange}
              maxLength={100}
              placeholder='Tell me about your code...'
            ></textarea>
            <button
              type='submit'
              className='block rounded bg-inherit bg-orange-500 hover:bg-orange-600 p-2 mb-8 mt-4 transition-all duration-300'
            >
              Answer me {duck.name}
            </button>
            {answer && (
              <div className='w-[25ch] sm:w-[50ch] h-56 px-4 py-2 bg-slate-100 dark:bg-slate-600 rounded transition-all duration-300'>
                <TypeWriter
                  options={{
                    delay: 5,
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString(answer).start();
                  }}
                />
              </div>
            )}
          </form>
        )}
      </div>
      <div className='flex'>
        <button
          className='rounded mx-12 bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 p-2 mt-8 transition-all duration-300 justify-self-end'
          onClick={() => navigate('/')}
        >
          Select another duck
        </button>
        <button
          className='rounded mx-12 bg-orange-500 hover:bg-orange-600 p-2 mt-8 transition-all duration-300 justify-self-end'
          onClick={() => {
            setIsAsking((prev) => !prev);
            setForm({ question: '', answer: '' });
          }}
        >
          {isAsking ? 'Turn off chat' : `Ask ${duck.name}`}
        </button>
        <button
          className='rounded mx-12 bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 p-2 mt-8 transition-all duration-300 justify-self-end'
          onClick={() => navigate('/showshibas')}
        >
          I need a break! Help me relax.
        </button>
      </div>
    </main>
  ) : (
    <div>No ducks here!</div>
  );
};

export default DebuggingDuck;
