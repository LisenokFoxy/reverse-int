module.exports = function reverse (n) { 
  let num=n.toString().split("").reverse().join("");
      return parseInt(num)
};