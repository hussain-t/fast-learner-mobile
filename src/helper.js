export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getNumFromString = (s) => {
  if (typeof s !== 'string') return '';
  return parseInt(s.match(/\d+$/)[0]);
};

// const regex = /(<([^>]+)>)/ig;
// const result = data.description.replace(regex, '');

export const decodeEntities = (encodedString) => {
  const translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  const translate = {
    nbsp: ' ',
    amp: '&',
    quot: '"',
    lt: '<',
    gt: '>',
  };
  return encodedString
    .replace(translate_re, (match, entity) => translate[entity])
    .replace(/&#(\d+);/gi, (match, numStr) => {
      const num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
};

export const getUserSnippets = (username) => {
  let initials = '';
  if (!username) {
    return initials;
  }

  const fullName = username.split(' ');
  const initialLetters = fullName.map(name => name.substring(0, 1));
  [initials] = initialLetters;
  if (initialLetters[1]) {
    initials += initialLetters[1];
  }

  return initials.toUpperCase();
};
