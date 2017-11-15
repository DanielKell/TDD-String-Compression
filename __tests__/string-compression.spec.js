const stringCompression = require('../lib/stringCompression.js');

describe('stringCompression', () => {

  describe('when you input a string of letters', () => {
    it('will return a new string with the number of each character next to it', () => {
      const result = stringCompression("car");
      expect(result).toEqual("c1a1r1");
    });
  });
});