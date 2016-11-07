(function() {
    'use strict';

var expect = chai.expect;

window.calc = window.calc || {};


  describe('my app', function() {
    it('should return the sum of an array of numbers', function() {
      expect([5, 4, 8]).to.equal([17]);
    });
  });


})();
