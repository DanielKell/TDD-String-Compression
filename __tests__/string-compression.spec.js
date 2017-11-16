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

  describe('when nothing is entered', () => {
    it('will return null', () => {
      const car = stringCompression("");
      expect(car).toEqual(null);
    });
  });

  describe('when numbers are entered instead of letters', () => {
    it('will return instructions to insert letters instead', () => {
      const car = stringCompression("hat420");
      expect(car).toEqual("Please insert only letters!");
    });
  });

    describe('when numbers are entered instead of letters', () => {
    it('will return instructions to insert letters instead', () => {
      const car = stringCompression("hat420");
      expect(car).toEqual("Please insert only letters!");
    });
  });

//     describe('when a non string is entered', () => {
//     it('will throw an error', () => {
//       const car = stringCompression(["1"]);
//       expect(typeof car).toBe('string');
//     });
//   });

});