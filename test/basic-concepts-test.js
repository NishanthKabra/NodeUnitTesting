var chai = require('chai');
var expect = chai.expect;

chai.should();

function isEven(num){
    return num % 2 == 0;
};

function add(num1, num2){
    return num1 + num2;
}

describe('isEven', function(){
    it('should return true when number is even', function(){
        isEven(4).should.be.true;
    });

    it('should return false when number is not even', function(){
        isEven(3).should.be.false;
    });
});

describe('add', function(){
    var num;
    beforeEach(function(){
        num = 5;
    });

    it('should return 10 when adding 5 and 6', function(){
        add(num, 6).should.equal(11);

    });

    it('should return 10 when adding 5 and 7', function(){
        add(num, 7).should.equal(12);
    });
});

//it.skip or xit to skip test
//describe.skip or xdescribe to skip describes
//it.only to run only one test

