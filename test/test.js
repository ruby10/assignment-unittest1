
var sinon = require('sinon'),
    assert = require('assert')

var testUtil = require('../testUtils.js')
var isPalindromeIncorrectInputTypeError = "Error: Provided input type is not correct!"
var isPalindromeNullInputError = "Provided input is null!";
var getAverageIncorrectInputTypeError = "Error: Provided input type is not correct!"
var getAverageNullInputError = "Provided input is null!"

describe('isPalindromeFunctiontestSuite', function() {
  it('should get incorrect type error for array type from isPalindrome function', function() {
    var errInput = [1,2,3];
    var errString = testUtil.isPalindrome(errInput)
    assert.equal(isPalindromeIncorrectInputTypeError, errString)
  })

  it('should get incorrect type error for object type from isPalindrome function', function() {
    var errInput = {};
    var errString = testUtil.isPalindrome(errInput)
    assert.equal(isPalindromeIncorrectInputTypeError, errString)
  })

  it('should pass for palindrome number input to isPalindrome function', function() {
    assert.equal(true, testUtil.isPalindrome(12321))
  })

  it('should pass with for non-palindrome number input to isPalindrome function', function() {
    assert.equal(false, testUtil.isPalindrome(12216))
  })

  it('should pass for palindrome string input to isPalindrome function', function() {
    assert.equal(true, testUtil.isPalindrome('reviver'))
  })

  it('should pass with for non-palindrome number input to isPalindrome function', function() {
    assert.equal(false, testUtil.isPalindrome('nonPalindrome'))
  })

  it('should get null type error for null input to isPalindrome function', function() {
    assert.expectedException((new expectedException(isPalindromeNullInputError)), testUtil.isPalindrome(null))
    //console.log(assert.ifError(testUtil.isPalindrome(null)))
  })
})

describe('getAverageFunctionTestSuite', function() {
})
