module.exports = function reverse (n) {
  
  let num=n.toString().split("").reverse().join("");
  if (num.endsWith('-')) {
      num= '-' + num;
      return parseInt(num);
  }
  return parseInt(num);
}
