import React from 'react';

const LanguageSelect = ({ options, handleFromChange, handleToChange }) => {
  return (
    <div className='flex flex-col md:flex-row text-secondaryText md:space-x-3'>
      <label className='text-natural-700 mb-1 ' htmlFor='from-language'>
        From:
      </label>
      <select
        className='p-2 bg-slate-400 border-none text-white transition-all duration-100 ease-in-out outline-none overflow-hidden transform origin-top rounded-md w-[75%] md:w-[50%] md:mx-2 mb-2'
        id='from-language'
        required
        onChange={(e) => handleFromChange(e.target.value)}
      >
        <option value='default'>Select Language</option>

        {options.map((option) => (
          <option
            key={option.name}
            value={option.name}
            className='text-white transition-all opacity-0 transform scale-75 delay-[50ms] ease-out group-hover:opacity-100 group-hover:scale-100'
          >
            {option.name}
          </option>
        ))}
      </select>

      <label htmlFor='to-language' className='text-natural-700 mb-1'>
        To:
      </label>
      <select
        className='p-2 bg-slate-400 border-none text-white transition-all duration-100 ease-in-out outline-none overflow-hidden transform origin-top rounded-md w-[75%] md:w-[50%] md:mx-2 mb-2 '
        id='to-language'
        required
        onChange={(e) => handleToChange(e.target.value)}
      >
        <option value='default'>Select Language</option>
        {options.map((option) => (
          <option
            key={option.name}
            value={option.name}
            className='text-white transition-all opacity-0 transform scale-75 delay-[50ms] ease-out  group-hover:opacity-100 group-hover:scale-100'
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
