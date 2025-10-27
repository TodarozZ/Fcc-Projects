// codice prodotto da me: dichiarato condizioni in ordine sbagliato
function addTogether(a, b) { 
    if (typeof a !== 'number' || typeof b !== 'number') {
        return undefined;
    } else if (arguments.length === 1) {
        return function (b) {
            if (typeof b !== 'number') {
                return undefined
            } else {
                return a + b;
            }
        }
    } else {
        return a + b;
    }
}

console.log(addTogether(5));

// soluzione:
function addTogether(a, b) {
    // Caso 1: Solo un argomento è stato passato
    if (arguments.length === 1) {
        // Verifica che `a` sia un numero
        if (typeof a !== 'number') {
            return undefined;
        }
        // Restituisce una funzione che attende il secondo argomento
        return function (secondArg) {
            // Verifica che il secondo argomento sia un numero
            if (typeof secondArg !== 'number') {
                return undefined;
            }
            // Restituisce la somma
            return a + secondArg;
        };
    } else {
        // Caso 2: Due argomenti sono stati passati
        // Verifica che entrambi siano numeri
        if (typeof a !== 'number' || typeof b !== 'number') {
            return undefined;
        }
        // Restituisce la somma
        return a + b;
    }
  }