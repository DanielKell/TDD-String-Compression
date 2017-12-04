//The vending machine must:

//  Have functionality for printing inventory
//  Have functionality for refilling inventory
//  Have functionality for re-supplying change
//  Have functionality for dispensing inventory based on payment
//  Have functionality for returning change as coins (eg. $0.35 is 1 quarter and 1 dime)

    //Setup the vending machine
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

module.exports = class vendingMachine {

    constructor() {
    }

    //Print the inventory
    printInventory() {
        return chocolateBars.map((item) => {
            return {name: item.name, supply: item.supply, cost: item.cost}
        });
    }

    //Refill the inventory

    //We want the the state to be kept and returned correctly. Refer to Bobby's code; change items to this.vmItems (to keep state)
    refillInventory(newStock) {
        return chocolateBars.map((item) => {
            let updatedSupply = item.supply + newStock;
            if (updatedSupply > 10) updatedSupply = 10;

            return {name: item.name, supply: updatedSupply}
        });
    } 

    //Resupply change

    resupplyChange(amount) {

        return cashInventory1.map((item) => {

            if (item.supply > 5 ) return {name: item.name, supply: item.supply}
            else return {name: item.name, supply: item.supply + amount}
        });
        }
     

    //Dispense Inventory based on payment 

    //When a user selects an item, and provides a payment, remove 1 item's supply from the machine 

    dispenseItem(item, payment) {

        let wantedItem = chocolateBars.find(x => x.name === item);

        if (!wantedItem) return `Sorry, ${item} does not exist!`;

        if (payment >= wantedItem.cost) {
            let change = payment - wantedItem.cost;
            chocolateBars.find(x => x.name === item).supply - 1;
            return `You bought a ${wantedItem.name} for $${wantedItem.cost}. Your change is $${change}. The vending machine now has ${wantedItem.supply-1} ${wantedItem.name} left.`
        } else {
            let missingChange = wantedItem.cost - payment;
            return `Sorry you are $${missingChange} short.`
        }
    }
    //  Have functionality for returning change as coins (eg. $0.35 is 1 quarter and 1 dime)

    //If user puts in $5 and purchases something costing 1.9 they should be given a 2, 1, 0.10.
    returnChange(payment, costOfItem) {
        let changeToGive = payment - costOfItem;
        let coinsReturned = [];

        if (changeToGive === 0) return 'Thanks for entering the exact amount!';

        for (; changeToGive > 0;) {

            if ( changeToGive >= 2 ) {
                coinsReturned.push(" 2");
                changeToGive -= 2;
                cashInventory2.find(x => x.value === 2).supply - 1
            } else if ( changeToGive >= 1 ) {
                coinsReturned.push(" 1");
                changeToGive -= 1;
                cashInventory2.find(x => x.value === 1).supply - 1
            } else if ( changeToGive >= 0.25 ) {
                coinsReturned.push(" 0.25");
                changeToGive -= 0.25;
                cashInventory2.find(x => x.value === 0.25).supply - 1
            } else if ( changeToGive >= 0.10 ) {
                coinsReturned.push(" 0.10");
                changeToGive -= 0.10;
                cashInventory2.find(x => x.value === 0.10).supply - 1
            } else if ( changeToGive >= 0.05 ) {
                coinsReturned.push(" 0.05");
                changeToGive -= 0.05;
                cashInventory2.find(x => x.value === 0.05).supply - 1
            } else {
                changeToGive = 0;
            }
        }
        return `Here is your change:${coinsReturned}`;
    }
}