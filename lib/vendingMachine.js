//The vending machine must:

//  Have functionality for printing inventory
//  Have functionality for refilling inventory
//  Have functionality for re-supplying change
//  Have functionality for dispensing inventory based on payment
//  Have functionality for returning change as coins (eg. $0.35 is 1 quarter and 1 dime)

    //Setup the vending machine

module.exports = class vendingMachine {

    //Print the inventory
    printInventory(items) {
        let stock = items.map((item) => {
            return {name: item.name, supply: item.supply, cost: item.cost}
        });
        return stock;
    }

    //Refill the inventory
    refillInventory(items, newStock) {
        let newSupply = items.map((item) => {
            let updatedSupply = item.supply + newStock;
            if (updatedSupply > 10) updatedSupply = 10;

            return {name: item.name, supply: updatedSupply}
        });
        return newSupply;
    } 

    //Resupply change

    resupplyChange(cashInventory, amount) {

        let newCoins = cashInventory.map((item) => {

            if (item.supply > 5 ) return {name: item.name, supply: item.supply}
            else return {name: item.name, supply: item.supply + amount}
        });
        return newCoins;
        }
     

    //Dispense Inventory based on payment 

    //When a user selects an item, and provides a payment, remove 1 item's supply from the machine 

    dispenseItem(item, chocolateBars, payment) {

        let wantedItem = chocolateBars.find(x => x.name === item);

        if (!wantedItem) return `Sorry, ${item} does not exist!`;

        if (payment >= wantedItem.cost) {
            let change = payment - wantedItem.cost;
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
            } else if ( changeToGive >= 1 ) {
                coinsReturned.push(" 1");
                changeToGive -= 1;
            } else if ( changeToGive >= 0.25 ) {
                coinsReturned.push(" 0.25");
                changeToGive -= 0.25;
            } else if ( changeToGive >= 0.10 ) {
                coinsReturned.push(" 0.10");
                changeToGive -= 0.10;
            } else if ( changeToGive >= 0.05 ) {
                coinsReturned.push(" 0.05");
                changeToGive -= 0.05;
            } else {
                changeToGive = 0;
            }
        }
        return `Here is your change:${coinsReturned}`;
    }
}