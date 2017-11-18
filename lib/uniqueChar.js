// write a function that returns the first unique character in a string.

module.exports = function uniqueChar (string) {

    var charCount = {};
    trimString = string.replace(/\s/g,'')

    if (/\d/.test(trimString)) return "Please insert only letters!";

    for(var i = 0; i < trimString.length; i++){
        if(charCount[trimString[i]]){
            charCount[trimString[i]] = 'Multiple';
        } else {
            charCount[trimString[i]] = 'One Time';
        }
    }    
    for(var j = 0; j < trimString.length; j++){
        if(charCount[trimString[j]] === 'One Time'){
          return trimString.charAt(j);      
        }
    }
    return undefined;
}

//The time complexity is O(n)