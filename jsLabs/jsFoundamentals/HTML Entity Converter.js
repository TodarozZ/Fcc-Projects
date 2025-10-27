//mia logica oggetto entity
const entityConvert = [
    { entity: '&', htmlConvert: '&amp;' },
    { entity: '<', htmlConvert: '&lt;' },
    { entity: '>', htmlConvert: '&gt;' },
    { entity: '"', htmlConvert: '&quot;' },
    { entity: "'", htmlConvert: '&apos;' },
];

//aiuto ai per il loop
function convertHTML(str) {
    let newString = ""; // Inizializza la nuova stringa

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let foundMatch = false; // Flag per tenere traccia se abbiamo trovato una corrispondenza

        for (let j = 0; j < entityConvert.length; j++) {
            if (char === entityConvert[j].entity) {
                newString += entityConvert[j].htmlConvert;
                foundMatch = true;
                break; // Esci dal loop interno se trovi una corrispondenza
            }
        }

        // Se non c'è stata una corrispondenza, aggiungi il carattere originale
        if (!foundMatch) {
            newString += char;
        }
    }

    return newString;
}
//fine mio codice


//ai qwen3: Crea un oggetto di lookup per velocizzare le sostituzioni
const entityMap = entityConvert.reduce((map, item) => {
    map[item.entity] = item.htmlConvert;
    return map;
}, {});

function convertHTML(str) {
    return str.replace(/[&<>"']/g, char => entityMap[char]);
}