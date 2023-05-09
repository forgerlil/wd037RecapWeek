import { useState } from 'react';
import axios from 'axios';
import { toastError, toastSuccess } from '../lib/toastify';
import { useNavigate } from 'react-router-dom';

const inputStyles =
  'w-4/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all';

const AddDuck = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    image: '',
    quote: '',
    owner: '',
  });

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addNewDuck = async (e) => {
    e.preventDefault();
    try {
      const { status } = await axios.post(
        `${import.meta.env.VITE_API_URL}/ducks`,
        { ...formState }
      );
      if (status === 201) {
        toastSuccess('Duck added!');
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (error) {
      error.response.data.error.forEach((err) => toastError(err));
    }
  };

  return (
    <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
      <form
        onSubmit={addNewDuck}
        className='flex flex-col items-center justify-between dark:bg-slate-600 pt-4 bg-slate-100 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 transition-all'
      >
        <h1 className='mt-2 mb-8 lg:mb-16 text-xl font-semibold text-center p-2 sm:p-4 lg:p-8'>
          Another duck rises to the debugging call? Please list it here:
        </h1>
        <div className='flex flex-col items-center justify-around h-1/2 w-2/3 mb-8'>
          <input
            type='text'
            placeholder="Duck's Name"
            name='name'
            value={formState.name}
            onChange={handleChange}
            className={inputStyles}
          />
          <input
            type='text'
            placeholder='Duck photo URL'
            name='image'
            value={formState.image}
            onChange={handleChange}
            className={inputStyles}
          />
          <input
            type='text'
            placeholder="Duck's favorite quote"
            name='quote'
            value={formState.quote}
            onChange={handleChange}
            className={inputStyles}
          />
          <input
            type='text'
            placeholder="Duck's owner"
            name='owner'
            value={formState.owner}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
        <button
          type='submit'
          className='w-full bg-orange-500 hover:bg-orange-600 p-1'
        >
          Join the fray
        </button>
      </form>
    </div>
  );
};

export default AddDuck;
