const axios = require('axios');

const translate = async (req, res) => {
  try {
    // Get and validate input
    const { text, sourceLang, targetLang } = req.body;

    if (!text || !targetLang) {
      return res
        .status(400)
        .json({ error: 'Text and target language are required' });
    }

    const response = await axios.get(
      'https://api.mymemory.translated.net/get',
      {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
        },
      }
    );

    if (response.data && response.data.responseData) {
      const data = response.data.responseData.translatedText;
      return res.status(200).json({ translation: data });
    } else {
      throw new Error('Translation failed');
    }
  } catch (error) {
    console.error('Error translating text:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { translate };
