(function() {
    'use strict';

var expect = chai.expect;

window.calc = window.calc || {};

  /**
   * [result description]
   * @type {[type]}
   */
  describe('my app', function() {
    it('should add the numbers in an array and return the total of all numbers', function() {
       var result = window.calc.sum([5, 4, 8]);
        expect(result).to.equal(17);
    });

    it('should handle the function when no arguments are given', function(){
        var result = window.calc.sum();
        expect(result).to.equal(0);
    });

    it('shoud handle the function when a string is given', function(){
        var result = window.calc.sum('balloons');
        expect(result).to.equal('balloons');
    });
  });



})();
