

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

});