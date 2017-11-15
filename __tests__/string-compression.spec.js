const stringCompression = require('../lib/stringCompression.js');

describe('stringCompression', () => {

  describe('when you input a string of letters', () => {
    it('will return a new string with the number of each character next to it', () => {
      const car = stringCompression("car");
      expect(car).toEqual("c1a1r1");
    });
    it('will return a new string with the number of each character next to it', () => {
      const result = stringCompression("carrrrrrrr");
      expect(result).toEqual("c1a1r8");
    });
    it('will return a new string with the number of each character next to it', () => {
      const result = stringCompression("plumbus");
      expect(result).toEqual("p1l1u1m1b1u1s1");
    });
    it('will return a new string with the number of each character next to it', () => {
      const result = stringCompression("access");
      expect(result).toEqual("a1c2e1s2");
    });
  });


});