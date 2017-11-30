
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var DataLoader = require('../DataLoader');
var dataLoader = new DataLoader();

describe('DataLoader', function(){
    it('gets a student synchronously', function(){
        var student = dataLoader.getStudentSync(1);

        should.exist(student.name);
        student.name.should.equal('John Doe')
    });

    it('gets a student Asynchronously', function(done){

        var student = dataLoader.getStudent(1, function(student){
            should.exist(student.name);
            student.name.should.equal('John Doe');
            done(); //Very important for testing any async functions/promises. its run synchronously and without this done the assertions are always passings even if the expects are different from actual.
            //done is a function which tells the mocha runner to wait for the async function to complete and then run assertions
        });
        
    });
});