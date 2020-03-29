'use strict';

require('chai').should();

const removeLeastUsedCharacters = require('../index.js');

const text = 'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.'
const emptyStr = '';
const shortStr = 'Hello world!'
const oneCharStr = 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'

describe('Test that the function removes minimal used characters', function () {

  it('should return a set', function () {
    removeLeastUsedCharacters(text).should.be.a('set');
  });

  it('should return a set with the length smaller than the texts length', function () {
    removeLeastUsedCharacters(text).should.have.length.below(text.length);
  });

  it('should return an empty set if the text is empty', function () {
    removeLeastUsedCharacters(emptyStr).should.have.lengthOf(0);
  });

  it('should return an empty set if didn\'t find a character to remove', function () {
    removeLeastUsedCharacters(oneCharStr).should.have.lengthOf(0);
  });

  it('should return an empty set if the length of the text is less than 50', function () {
    removeLeastUsedCharacters(shortStr).should.have.lengthOf(0);
  });

});
