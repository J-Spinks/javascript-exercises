const removeFromArray = function(array, ...removeElements) {
    return array.filter(item => !removeElements.includes(item));


};

// Do not edit below this line
module.exports = removeFromArray;
