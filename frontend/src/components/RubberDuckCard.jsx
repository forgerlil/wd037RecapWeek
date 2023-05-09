const RubberDuckCard = ({ duck }) => {
  return (
    <>
      <div className='w-72 my-12 mx-8 p-4 bg-slate-100 dark:bg-slate-600 rounded flex flex-col items-center hover:bg-slate-200 dark:hover:bg-slate-500 hover:cursor-pointer transition-all duration-300'>
        <img
          src={duck.image}
          alt={`${duck.name}'s profile`}
          className='w-60 h-60 object-cover rounded mb-4'
        />
        <p className='text-center text-semibold mb-4'>
          My name is {duck.name}! Do you need my help with debugging?
        </p>
        <p className='text-center text-xs'>
          I am one of {duck.owner} &apos;s trusty confidantes.
        </p>
      </div>
    </>
  );
};

export default RubberDuckCard;
