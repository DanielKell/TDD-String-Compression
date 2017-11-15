
module.exports = function stringCompression(string) {

    let result = string.charAt(0);
    let charCount = 1;

    if (string.length === 0) return null;

    if (string.length == 1) {
        result += charCount;
        return result;
    } else {

        for(let i=1;i<string.length;i++) {

            if (/\d/.test(string)) return "Please insert only letters!";

            if(string.charAt(i) != string.charAt(i-1)) {
                result += charCount + string.charAt(i);
                charCount = 1;
            } else {
                charCount++;
            }
            if (i == string.length - 1) {
                result += charCount;
            }
        }
        return result;
    }

}