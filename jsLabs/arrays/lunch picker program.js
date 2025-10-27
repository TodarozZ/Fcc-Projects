const lunches = [];

function addLunchToEnd(arr, str) {
const newItem = str;
arr.push(newItem);
console.log(`${newItem} added to the end of the lunch menu.`);
return arr
}

console.log(addLunchToEnd(lunches, "Tacos"));

function addLunchToStart(arr, str) {
const newItem = str;
arr.unshift(newItem);
console.log(`${newItem} added to the start of the lunch menu.`);
return arr
}

console.log(addLunchToStart(lunches, "Pizza"));

function removeLastLunch(arr) {
if (arr.length >= 1) {
const removedItem = arr.pop();
console.log(`${removedItem} removed from the end of the lunch menu.`);
return arr
} else {
return console.log("No lunches to remove.")
}
}

function removeFirstLunch(arr) {
if (arr.length >= 1) {
const removedItem = arr.shift();
console.log(`${removedItem} removed from the start of the lunch menu.`);
return arr
} else {
return console.log("No lunches to remove.")
}
}

function getRandomLunch (arr) {
if (arr.length === 0) {
console.log("No lunches available.");
} else {
const randomLunch = arr[Math.floor(Math.random() * arr.length)];
console.log(`Randomly selected lunch: ${randomLunch}`);
}
}

console.log(getRandomLunch(lunches));

function showLunchMenu (arr) {
if (arr.length === 0) {
console.log("The menu is empty.");
} else {
const menuMsg = "Menu items: " + arr.join(', ');
console.log(menuMsg)
}
}