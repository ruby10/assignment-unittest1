var _ = require('lodash')
utils = {
getAverage: function(arr, callback) {
  var sum = 0;
  if (!(_.isArray(arr))) {
    return "Error: Provided input type is not array type!"
  }

  for (i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i]
  }
  return sum/arr.length;
},

isPalindrome: function( arg ) {
  if (!(arg === null)) {
    if (typeof(arg) === 'string') {
      return (arg === arg.split('').reverse().join(''))
    } else {
      if (typeof(arg) === 'number') {
        arg = arg.toString()
        return (arg === arg.split('').reverse().join(''))
      } else {
        return "Error: Provided input type is not correct!"
      }
    }
  } else {
    throw new Exception("Provided input is null!")
  }
}
}
exports.isPalindrome = utils.isPalindrome
exports.getAverage = utils.getAverage
