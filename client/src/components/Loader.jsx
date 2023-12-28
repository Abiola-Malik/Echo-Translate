import React from 'react';

const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-6 h-6 border-4 border-secondary border-dashed rounded-full animate-spin transition ease-in border-t-transparent'></div>
    </div>
  );
};

export default Loader;
