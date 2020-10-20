module.exports = function check(str, bracketsConfig) {
  let res = [];
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0]) {
        if (str[i] === res[res.length - 1] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
          res.pop();
          break;
        }
        else {
          res.push(str[i]);
          break;
        }
      }
      else if (str[i] === bracketsConfig[j][1]) {
        if (!(res.length) || (res[res.length - 1] !== bracketsConfig[j][0])) return false
        else res.pop()
      }
    }
  }
  return res.length ? false : true
}
