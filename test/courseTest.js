var Student = require('../Student');
var Course = require('../Course');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('Course', function(){
    var courseName = "Javascript for Beginners",
        courseCode = "JS 101",
        courseDesc = "Intro to Javascript";

        var student;

    beforeEach(function(){
        student = Student.create("Nishanth Kabra", 5);
    });

    it("should save data correctly", function(){
        var course = Course.create(courseName, courseCode, courseDesc);

        course.name.should.equal(courseName);
        course.code.should.equal(courseCode);
        course.description.should.equal(courseDesc);
        
        should.exist(course.students);
        course.students.should.eql([]);

        should.exist(course.times);
        course.times.should.eql([]);

    });

    describe('registerStudent', function(){
        it('should add student to student array', function(){
            var course = Course.create(courseName, courseCode, courseDesc);
            course.registerStudent(student);
            course.students.length.should.equal(1);
            course.students[0].id.should.equal(student.id);
        });
    });

    describe('unregisterStudent', function(){
        it('should throw an error ifwe remove a student that is not in the class', function(){
            var course = Course.create(courseName, courseCode, courseDesc);

            //special way of asserting exceptions written in code, this test fails if code does not throw exception
            expect(function(){
                course.unregisterStudent("Test");
            }).to.throw();

        });
    });

    describe('addTimes', function(){
        it('should add the given days/times to the course', function(){
            var course = Course.create(courseName, courseCode, courseDesc);
            var days = ['Monday', 'Tuesday', 'Friday'];
            var times = ['10.00', '15.00'];

            course.addTimes(days, times);

            course.times.length.should.equal(6);

            course.times[2].should.eql({
                day: 'Tuesday',
                time: '10.00'
            });

        });


    });


});
