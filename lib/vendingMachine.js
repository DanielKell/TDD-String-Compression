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
            return {name: item.name, supply: item.supply + amount}
        });
        return newCoins;

    }
}
