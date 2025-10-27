function truthCheck(collection, pre) {
    let allTrue = true;
    collection.forEach(element => {
        if (!element[pre]) {
            allTrue = false;
            return;
        } 
    });
    return allTrue;
};


console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));
//false

console.log(truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "id"));
//false

console.log(truthCheck([{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], "users"));
//true

