
function whatIsInAName(collection, source) {
    return collection.filter(obj => {
        return Object.keys(source).every(key => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
} // ai explain
  