const vendingMachine = require('../lib/vendingMachine.js');

const myVendingMachine = new vendingMachine;

        let chocolateBars = [
            {
                name: "twix",
                cost: 1.5,
                supply: 3
                },
            {
                name: "mars",
                cost: 1.75,
                supply: 2
                },
            {   
                name: "milkyWay",
                cost: 1.9,
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
          [{"cost": 1.5, "name": "twix", "supply": 3}, 
          {"cost": 1.75, "name": "mars", "supply": 2}, 
          {"cost": 1.9, "name": "milkyWay", "supply": 1}]
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

//Purchase item from machine
describe('dispenseItem', () => {

  describe('When a user picks an item from the machine and inserts payment', () => {
    it('should dispense the item and remaining change', () => {
      const result = myVendingMachine.dispenseItem("twix", chocolateBars, 2); 
      expect(result).toEqual("You bought a twix for $1.5. Your change is $0.5. The vending machine now has 2 twix left.");
    });
  });

  describe("When a user picks an item but doesn't enter enough change", () => {
    it('should return a message letting the user know', () => {
      const result = myVendingMachine.dispenseItem("mars", chocolateBars, 1.5); 
      expect(result).toEqual("Sorry you are $0.25 short.");
    });
  });
});
  //Return change as coins.

describe('sortChange', () => {

  describe('When a user purchases something and needs their change returned', () => {
    it('should dispense the change in as few coins as possible', () => {
      const result = myVendingMachine.returnChange(10, 3.10); 
      expect(result).toEqual("Here is your change: 2, 2, 2, 0.25, 0.25, 0.25, 0.10, 0.05");
    });
  });

  describe('When a user purchases something and enters the exact amount of change', () => {
    it('should let them know they entered the exact amount', () => {
      const result = myVendingMachine.returnChange(1.90, 1.90); 
      expect(result).toEqual("Thanks for entering the exact amount!");
    });
  });

});

