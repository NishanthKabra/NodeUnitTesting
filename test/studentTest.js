var Student = require('../Student');
var Course = require('../Course');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('Student', function(){
    it('should have the infor on the student and create an id when created', function(){
        var student =  Student.create('Nishanth Kabra', 5);

        should.exist(student.name);
        student.name.should.equal('Nishanth Kabra');
        should.exist(student.grade);
        student.grade.should.equal(5);

        should.exist(student.id);
        
    });

    it("should increase the student's grade by 1 when advancedGrade is called", function(){
        var student =  Student.create('Nishanth Kabra', 5);
        student.advanceGrade();
        student.grade.should.equal(5 + 1);
    });
});