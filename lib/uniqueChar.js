// write a function that returns the first unique character in a string.

module.exports = function uniqueChar (string) {

    var charCount = {};
    for(var i = 0; i < string.length; i++){
        if(charCount[string[i]]){
            charCount[string[i]] = 'Multiple';
        } else {
            charCount[string[i]] = 'One Time';
        }
    }    
    for(var j = 0; j < string.length; j++){
        if(charCount[string[j]] === 'One Time'){
          return string.charAt(j);      
        }
    }

    return undefined;


}