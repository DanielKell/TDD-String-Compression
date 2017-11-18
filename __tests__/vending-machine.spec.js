const vendingMachine = require('../lib/vendingMachine.js');

const myVendingMachine = new vendingMachine;

        let chocolateBars = [
            {
                name: "twix",
                cost: 5,
                supply: 3
                },
            {
                name: "mars",
                cost: 4,
                supply: 2
                },
            {   
                name: "milkyWay",
                cost: 3,
                supply: 1
                }
        ]
        let cashInventory = [
            {
                name: "fiveCents", 
                supply: 2,
                value: 0.05
            },
            {   name: "tenCents",
                supply: 8,
                value: 0.10,
            },{
                name: "quarter",
                supply: 5,
                value: 0.25
            },{
                name: "loonie",
                supply: 3,
                value: 1
            },{
                name: "twoonie",
                supply: 5,
                value: 2
            },{
            total: 0
            }]

describe('printInventory', () => {

  describe('when you input a string of letters', () => {
    it('will return the first unique letter', () => {
      const result = myVendingMachine.printInventory(chocolateBars); 
      expect(result).toEqual(2);
    });
  });
});