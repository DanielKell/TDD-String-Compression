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
        let cashInventory1 = [
            {
                name: "fiveCents", 
                supply: 2,
                value: 0.05
            },
            {   name: "tenCents",
                supply: 3,
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
                supply: 1,
                value: 2
            }
            ]
            let cashInventory2 = [
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
                supply: 6,
                value: 2
            }
            ]

//Printing the inventory
describe('printInventory', () => {

  describe('when you request the contents of the machine', () => {
    it('will print out a list of the contents, their price, and their supply', () => {
      const result = myVendingMachine.printInventory(chocolateBars); 
      expect(result).toEqual(
          [{"cost": 5, "name": "twix", "supply": 3}, 
          {"cost": 4, "name": "mars", "supply": 2}, 
          {"cost": 3, "name": "milkyWay", "supply": 1}]
      );
    });
  });
});

//Refilling the Inventory
describe('refillInventory', () => {

  describe('When a user adds supply to the machine', () => {
    it('should restock the number of items in the machine', () => {
      const result = myVendingMachine.refillInventory(chocolateBars, 5); 
      expect(result).toEqual([
        {"name": "twix", "supply": 8}, 
        {"name": "mars", "supply": 7}, 
        {"name": "milkyWay", "supply": 6}
        ]
      );
    });
  });

    describe('When a user adds supply to the machine but the new stock would be above 10', () => {
    it('should restock up to 10, but not more', () => {
      const result = myVendingMachine.refillInventory(chocolateBars, 15); 
      expect(result).toEqual([
        {"name": "twix", "supply": 10}, 
        {"name": "mars", "supply": 10}, 
        {"name": "milkyWay", "supply": 10}
        ]
      );
    });
  });
});

//Resupply change
describe('resupplyChange', () => {

  describe('When a user tops up the coins in the machine', () => {
    it('should restock the number of coins input', () => {
      const result = myVendingMachine.resupplyChange(cashInventory1, 2); 
      expect(result).toEqual([
      {"name": "fiveCents", "supply": 4}, 
      {"name": "tenCents", "supply": 5}, 
      {"name": "quarter", "supply": 7}, 
      {"name": "loonie", "supply": 5}, 
      {"name": "twoonie", "supply": 3}]
      );
    });
  });

  describe('If there are more than 5 coins remaining in the machine', () => {
    it('should not restock the coins yet', () => {
      const result = myVendingMachine.resupplyChange(cashInventory2, 5); 
      expect(result).toEqual([
      {"name": "fiveCents", "supply": 7}, 
      {"name": "tenCents", "supply": 8}, 
      {"name": "quarter", "supply": 10}, 
      {"name": "loonie", "supply": 8}, 
      {"name": "twoonie", "supply": 6}]
      );
    });
  });

});