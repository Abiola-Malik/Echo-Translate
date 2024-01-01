import React from 'react';

const LanguageSelect = ({ options, handleFromChange, handleToChange }) => {
  return (
    <div className='flex flex-col md:flex-row text-secondaryText'>
      <label className='text-secondaryText' htmlFor='from-language'>
        Translate From:
      </label>
      <select
        className='px-4 py-2 rounded-full w-[50%] mx-2 bg-black border-none text-white transition-all duration-500 ease-in-out outline-none overflow-hidden '
        id='from-language'
        required
        onChange={(e) => handleFromChange(e.target.value)}
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

      <label htmlFor='to-language'>Translate To:</label>
      <select
        className='px-4 py-2 rounded-full w-[50%] mx-2 bg-black border-none text-white transition-all duration-500 ease-in-out outline-none overflow-hidden '
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
