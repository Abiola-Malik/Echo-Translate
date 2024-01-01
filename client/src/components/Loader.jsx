import React from 'react';
import './animations.css';
const Loader = () => {
  return (
    <div className='flex space-x-1 p-3' id='loader'>
      <div className='w-3 h-3 rounded-full  bg-slate-800 animate-bounce'></div>
      <div className='w-3 h-3 rounded-full bg-slate-800 animate-bounce'></div>
      <div className='w-3 h-3 rounded-full bg-slate-800 animate-bounce'></div>
    </div>
  );
};

export default Loader;
