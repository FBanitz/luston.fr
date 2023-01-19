/// transform camel case text to a text with each word capitalized on the first letter
function camelToCapitalize(str) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
};

export { camelToCapitalize };