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
    <main className='bg-primary min-h-screen flex flex-col justify-between'>
      <h1 className='text-3xl p-1 md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[tomato] to-[lightgreen] '>
        Echo Translate - Multilingual Text Translation
      </h1>

      <form
        className='text-black flex-grow flex flex-col justify-between p-4 w-full max-w-[600px] mx-auto'
        onSubmit={(e) => handleTranslate(e)}
      >
        <section className='flex flex-col gap-3 mb-3'>
          <LanguageSelect
            handleFromChange={handleFromChange}
            handleToChange={handleToChange}
            options={options}
          />
        </section>
        <TranslationDisplay content={content} error={error} />

        <div className='flex items-center gap-3 rounded-full border border-white text-secondaryText space-x-5 py-2 justify-self-end'>
          <input
            type='text'
            placeholder='Enter text to translate'
            className='pl-3 my-2 rounded bg-transparent w-[80%] focus:border-none hover:border-none outline-none resize-none h-[32px]'
            required
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            onClick={(e) => handleTranslate(e)}
            className='hover:text-[tomato] hover:animate-pulse text-[32px]  rounded text-slate-300 mt-2 hover:bg-opacity-80 transition duration-150 ease-in ml-auto'
            type='submit'
          >
            <VscSend />
          </button>
        </div>
      </form>
    </main>
  );
};

export default Home;
