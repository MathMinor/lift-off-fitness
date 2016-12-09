var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
const models = require('../../models');

describe('User Model', function() {
  before(function(done) {
    models.User.sync({ force : true }) // drops table and re-creates it
      .then(function() {
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
  });

	  it('Should contain a username property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('username');
    	done();
    });

  	it('Should contain a firstName property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('firstName');
    	done();
  	});

	  it('Should contain a lastName property',function(done) {
    	var a1 = models.User.build();
   		expect(a1).to.have.property('lastName');
    	done();
  	});

  	it('Should contain an email property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('email');
    	done();
  	});

  	it('Should contain a password property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('password');
    	done();
  	});

  	it('Should NOT contain a secret property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.not.have.property('secret');
    	done();
  	});

  	describe('Creating User', function () {
    	it('Should not save when missing a username',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing a firstName',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing a lastName',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing an email',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});
		
		  it('Should not save when missing a password',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

		  it('Should not save when all properties are provided incorrectly (testing all invalid inputs)',function (done) {
      		models.User.create({
      			username: 'foofo',
      			firstName: 'Ryan213',
      			lastName: 'James687',
      			email: 'foo@foo',
      			password: 'passw',
            // fitness_goal should not exceed 140 characters
            fitness_goal: 'This is a test of the fitness_goal that should not save if there are too many characters. The current limit is 140 characters for this text. '

      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); 
      		});
      });

      it('Should not save when all properties are provided incorrectly (less than length validations)',function (done) {
          models.User.create({
            username: 'foo', // username less than 4 chars
            firstName: 'Ryan213',
            lastName: 'James687',
            email: 'foo@foo',
            password: 'p;@12', // password less than 5 chars
            // fitness_goal should not exceed 140 characters
            fitness_goal: 'This is a test of the fitness_goal that should not save if there are too many characters. The current limit is 140 characters for this text. '
          })
          .then(function () {
            done('Failed'); // Fail if it SAVES
          })
          .catch(function (e) {
            done(); 
          });
      });

       it('Should not save when all properties are provided incorrectly (greater than length validations)',function (done) {
          models.User.create({
            username: 'qwertyuiopasdfghjklzx', // username more than 20 chars
            firstName: '3245213',
            lastName: '6234987',
            email: '@invalidemail',  
            // password more than 100 chars
            password: 'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm',
            // fitness_goal should not exceed 140 characters
            fitness_goal: 'This is a test of the fitness_goal that should not save if there are too many characters. The current limit is 140 characters for this text. '
          })
          .then(function () {
            done('Failed'); // Fail if it SAVES
          })
          .catch(function (e) {
            done(); 
          });
      });

      it('Should save when all properties are provided correctly (within validations)',function (done) {
      		models.User.create({
      			username: 'RyanB',
      			firstName: 'Ryan',
      			lastName: 'James',
      			email: 'ryanb@email.com',
      			password: 'password',
            fitness_goal: 'I like to lift!!'
      		})
      		.then(function () {
        		done(); // Pass if it SAVES
      		})
      		.catch(function (e) {
        		done(); 
      		});
      });

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'FrankieC',
            firstName: 'Frank',
            lastName: 'Cingel',
            email: 'frankc@email.com',
            password: 'drowssap',
            fitness_goal: 'I wanna get ripped!'
          })
          .then(function () {
            done(); // Pass if it SAVES
          })
          .catch(function (e) {
            done(); 
          });
      });

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'EdouardM',
            firstName: 'Edouard',
            lastName: 'Michel',
            email: 'edouardm@email.com',
            password: 'mypassword',
            fitness_goal: 'I wanna get the ladies!'
          })
          .then(function () {
            done(); // Pass if it SAVES
          })
          .catch(function (e) {
            done(); 
          });
      });


    });
});
