

const uniqueChar = require('../lib/uniqueChar.js');

describe('uniqueChar', () => {

  describe('when you input a string of letters', () => {
    it('will return the first unique letter', () => {
      const result = uniqueChar("aaaabbbccd");
      expect(result).toEqual("d");
    });
  });
});