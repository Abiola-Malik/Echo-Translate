import { useState } from 'react';
import options from '../data';
import { VscSend } from 'react-icons/vsc';
import Loader from './Loader';
import Axios from './Axios';

const Home = () => {
  const [inputVal, setInputVal] = useState('');
  const [selectedFromCode, setSelectedFromCode] = useState('');
  const [selectedToCode, setSelectedToCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [translatedWord, setTranslatedWord] = useState('');
  const [error, setError] = useState(null);

  let content;

  isLoading ? (content = <Loader />) : (content = translatedWord);

  const handleFromChange = (selectedOption) => {
    const filteredOption = options.find(
      (option) => option.name === selectedOption
    );
    setSelectedFromCode(filteredOption?.code || '');
  };

  const handleToChange = (selectedOption) => {
    const filteredToOption = options.find(
      (option) => option.name === selectedOption
    );
    setSelectedToCode(filteredToOption?.code || '');
  };

  const handleTranslate = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await Axios.get('/', {
        params: {
          q: inputVal,
          langpair: `${selectedFromCode}|${selectedToCode}`,
        },
      });

      if (response.data) {
        setIsLoading(false);
        setTranslatedWord(response.data.translation);
        setError(null); // Reset error state on success
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setError('An error occurred during translation. Please try again.');
    }
  };

  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-center'>
      <form className='text-black p-4 w-full max-w-[600px]'>
        <section className='flex flex-col gap-3 mb-3'>
          <div className='flex flex-col md:flex-row'>
            <label htmlFor='from-language'>From:</label>
            <select
              className='px-4 py-2 rounded w-[50%] mx-2 bg-black text-white'
              id='from-language'
              required
              onChange={(e) => handleFromChange(e.target.value)}
            >
              {options.map((option) => (
                <option
                  key={option.name}
                  value={option.name}
                  className='text-white'
                >
                  {option.name}
                </option>
              ))}
            </select>
            <label htmlFor='to-language'>To:</label>
            <select
              className='px-4 py-2 rounded w-[50%] mx-2 bg-black text-white mt-2 md:mt-0'
              id='to-language'
              required
              onChange={(e) => handleToChange(e.target.value)}
            >
              <option value='default'></option>
              {options.map((option) => (
                <option
                  key={option.name}
                  value={option.name}
                  className='text-white'
                >
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-row gap-3'>
            <input
              type='text'
              placeholder='Enter text'
              className='px-4 py-2 rounded w-[75%]'
              required
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              onClick={(e) => handleTranslate(e)}
              className='bg-secondary px-4 py-4 w-auto rounded text-black mt-2 hover:bg-opacity-80 transition duration-150 ease-in'
            >
              <VscSend />
            </button>
          </div>
        </section>
        <section className='my-3 h-[200px] bg-white text-black'>
          {error ? <p className='text-red-500'>{error}</p> : content}
        </section>
      </form>
    </div>
  );
};

export default Home;
