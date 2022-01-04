module.exports = function reverse(n) {
    let reversed = "";
    let str = Math.abs(n).toString();
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
};
