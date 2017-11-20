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

        if (payment >= wantedItem.cost) {
            let change = payment - wantedItem.cost;
            return `You bought a ${wantedItem.name} for $${wantedItem.cost}. Your change is $${change}. The vending machine now has ${wantedItem.supply-1} ${wantedItem.name} left.`
        } else {
            let missingChange = wantedItem.cost - payment;
            return `Sorry you are $${missingChange} short.`
        }

    }
}