function lookUpProfile(name, prop) {
    let result = "";
    for (const i in contacts) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                result = contacts[i][prop];
            } else if (!contacts[i].hasOwnProperty(firstName)) {
                result = "No such contact";
            } else {
                result = "No such property";
            }
        }
    } return result
} 



//ai code works 
function lookUpProfile(name, prop) {
    let result = "";
    for (const i in contacts) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                result = contacts[i][prop];
            } else {
                result = "No such property";
            }
            return result; // Stop searching once a match is found
        } 
    }
    return "No such contact"; 
}


let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

