module.exports = function toReadable (number) {
  const digits = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three', 
    '4': 'four', 
    '5': 'five', 
    '6': 'six', 
    '7': 'seven', 
    '8': 'eight', 
    '9': 'nine'
  };
    const teens = {
      '11': 'eleven', 
      '12': 'twelve', 
      '13': 'thirteen', 
      '14': 'fourteen', 
      '15': 'fifteen', 
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen', 
      '19': 'nineteen'
    };
  
    const tens = {
      '10': 'ten', 
      '20': 'twenty', 
      '30': 'thirty', 
      '40': 'forty', 
      '50': 'fifty', 
      '60': 'sixty', 
      '70': 'seventy', 
      '80': 'eighty', 
      '90': 'ninety'
    }; 

  function getDigit(number) {
    return `${digits[number]}`;
  }

  function getTeen(number) {
    return `${teens[number]}`;
  }

  function getTen(number) {
    if ((number % 10) == 0) {
      return `${tens[number]}`;
    } else if ((number % 10) != 0) {
      return `${tens[number - number % 10]} ${getDigit(number % 10)}`;
    }
  }

  function getHundred(number) {
    if ((number % 100) == 0) {
      return `${getDigit(number / 100)} hundred`;
    } else if ((number % 100) > 19) {
      return `${getDigit(Math.floor(number / 100))} hundred ${getTen(number % 100)}`;
    } else if ((number % 100) <= 9) {
      return `${getDigit(Math.floor(number / 100))} hundred ${getDigit(number % 100)}`;
    } else if (((number % 100) % 10) == 0) {
      return `${getDigit(Math.floor(number / 100))} hundred ${getTen(number % 100)}`;
    } else if ((number % 100) <= 19) {
      return `${getDigit(Math.floor(number / 100))} hundred ${getTeen(number % 100)}`;
    }
  }

  if (number <= 9) {
    return getDigit(number);
  } 

  if (number >= 11 && number <= 19) {
    return getTeen(number);
  } 

  if (number == 10 || number > 19 && number < 100) {
    return getTen(number);
  }

  if (number >= 100) {
    return getHundred(number);
  }
};