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

    //Calculate total cash in system


    //Resupply change
}
