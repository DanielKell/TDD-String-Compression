// write a function that returns the first unique character in a string.

module.exports = function uniqueChar (string) {

const arrayString = string.split("");
let answer = "";

for (i=0; i < string.length; i++) {
    if (arrayString[i] !== arrayString[i+1] && arrayString[i] !== arrayString[i-1]) {
        return answer += arrayString[i];
    } 
}

}