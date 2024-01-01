import { useState } from 'react';
import { VscCopy } from 'react-icons/vsc';

const TranslationDisplay = ({ content, error }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    const textArea = document.createElement('textarea');
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>
      <section className='my-3 h-[200px] bg-slate-900 text-black flex flex-col space-y-3 overflow-y-auto'>
        <button
          onClick={handleCopy}
          className='px-4 rounded text-white mt-2 hover:bg-opacity-80 transition duration-150 ease-in self-end text-1xl hover:text-[tomato]'
        >
          {copied ? (
            <p className='text-green-500 ml-2 px-2'>Text copied!</p>
          ) : (
            <VscCopy />
          )}
        </button>
        {error ? (
          <p className='text-red-500 ml-2 px-2'>{error}</p>
        ) : (
          <p className='text-secondaryText p-3'>{content}</p>
        )}
      </section>
    </>
  );
};

export default TranslationDisplay;
