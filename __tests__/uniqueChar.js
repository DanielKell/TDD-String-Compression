

const uniqueChar = require('../lib/uniqueChar.js');

describe('uniqueChar', () => {

  describe('when you input a string of letters', () => {
    it('will return the first unique letter', () => {
      const result = uniqueChar("aaaabbbd");
      expect(result).toEqual("d");
    });
  });

  describe('when there are no unique characters', () => {
    it('will return undefined', () => {
      const result = uniqueChar("aaaaa");
      expect(result).toEqual(undefined);
    });
  });

  describe('there are empty characters in the string', () => {
    it('will trim these blank spaces out and return correct answer', () => {
      const result = uniqueChar("aaaa bbb     d");
      expect(result).toEqual("d");
    });
  });

  describe('there is just one empty character in the string', () => {
    it('will trim this blank space out and return correct answer', () => {
      const result = uniqueChar("aaaa bbbd");
      expect(result).toEqual("d");
    });
  });


});