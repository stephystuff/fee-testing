(function() {
    'use strict';

var expect = chai.expect;

window.calc = window.calc || {};

  /**
   * [result description]
   * @type {[type]}
   */
  describe('calc app', function() {
    it('should check to make sure there is a namespace', function(){
      expect(window.calc.sum).to.be.a('function');
    });

      describe('sum test', function() {
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

      describe('factorial test', function(){
        it('should multiply the numbers together up to the chosen topNumber', function(){
          var resultTwo = window.calc.factorial(5);
          expect(resultTwo).to.equal(120);
        });

        it('should handle when a string other than "number" is listed as argument', function(){
          var resultTwo = window.calc.factorial('balloons');
          expect(resultTwo).to.equal(0);
        });

        it('should handle when no arguments are listed', function() {
          var resultTwo = window.calc.factorial();
          expect(resultTwo).to.equal(0);
        });

      });
    });


})();
