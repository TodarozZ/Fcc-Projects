const inventory = [];

function lowerCaseObject(object) {
    return {
        name: object.name.toLowerCase(),
        quantity: object.quantity
    }
}

function findProductIndex(itemName) {
    const lowerCaseItemName = itemName.toLowerCase();
    return inventory.findIndex(item => item.name.toLowerCase() === lowerCaseItemName);
}


function addProduct(itemObj) {
    const lowerCaseItemObj = lowerCaseObject(itemObj);
    const nameFound = findProductIndex(itemObj.name);
    if (nameFound !== -1) {
        inventory[nameFound].quantity += itemObj.quantity;
        console.log(`${lowerCaseItemObj.name} quantity updated`);
    } else {
        inventory.push(lowerCaseItemObj);
        console.log(`${lowerCaseItemObj.name} added to inventory`);
    }
}


function removeProduct(itemName, quantityToRmv) {
    const lowerCaseItemName = itemName.toLowerCase();
    const nameFound = findProductIndex(itemName);
    if (nameFound === -1) {
        console.log(`${lowerCaseItemName} not found`)
        return;
    }

    const remaining = inventory[nameFound].quantity - quantityToRmv;

    if (remaining > 0) {
        inventory[nameFound].quantity = remaining;
        console.log(`Remaining ${lowerCaseItemName} pieces: ${remaining}`);
    } else if (remaining === 0) {
        inventory.splice(nameFound, 1);
        console.log(`${lowerCaseItemName} removed from inventory`);
    } else {
        console.log(`Not enough ${lowerCaseItemName} available, remaining pieces: ${inventory[nameFound].quantity}`);
    }
}

