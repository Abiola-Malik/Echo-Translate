const validateText = (text) => {
  const errors = [];

  if (!text) {
    errors.push('Text is required');
  }

  if (text.length > 500) {
    errors.push('Text is too long (maximum is 500 characters)');
  }

  return errors;
};

module.exports = {
  validateText,
};
