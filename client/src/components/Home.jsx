import { useState } from 'react';
import { VscSend } from 'react-icons/vsc';
import options from '../data';
import Axios from './Axios';
import LanguageSelect from './LanguageSelect';
import Loader from './Loader';
import TranslationDisplay from './TranslationDisplay';

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
      const response = await Axios.get(
        `/get?q=${inputVal}&langpair=${selectedFromCode}|${selectedToCode}`
      );

      if (response.data) {
        setIsLoading(false);
        setTranslatedWord(response.data.responseData.translatedText);
        setError(null); // Reset error state on success
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setError('An error occurred during translation. Please try again.');
    }
  };

  return (
    <main className='bg-primary-400 h-full  justify-evenly flex flex-col  '>
      <h1 className='text-3xl p-1 md:text-center text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-natural-700 mt-4'>
        Echo Translate - Multilingual Text Translation
      </h1>

      <form
        className='text-black  p-4 w-full max-w-d[600px] mx-auto md:max-h-[600px] md:w-[600px] md:my-auto'
        onSubmit={handleTranslate}
      >
        <article className='md:self-centre md:mb-3'>
          <section className='flex flex-col gap-3 mb-3'>
            <LanguageSelect
              handleFromChange={handleFromChange}
              handleToChange={handleToChange}
              options={options}
            />
          </section>
          <TranslationDisplay content={content} error={error} />

          <div className=' w-full flex space-x-2 items-center'>
            <input
              type='text'
              placeholder='Enter text to translate'
              className='pl-3 my-2 rounded bg-primary-200 w-[95%] focus:border-none hover:border-none outline-none resize-none h-[38px] py-2'
              required
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              onClick={(e) => handleTranslate(e)}
              className='hover:text-[tomato] hover:animate-pulse text-[36px]  rounded text-slate-300  hover:bg-opacity-80 transition duration-150 ease-in ml-auto'
              type='submit'
            >
              <VscSend />
            </button>
          </div>
        </article>
      </form>
    </main>
  );
};

export default Home;
