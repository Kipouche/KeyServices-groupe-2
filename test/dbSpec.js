const chai = require('chai');
const mysql = require('mysql');
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect } = chai;

var User = require('../lib/user');

describe('Database', function(){
  /*
  describe('Access to DB', function () {
    const rightHost = 'eu-cdbr-west-03.cleardb.net';
    const rightUser = 'b7e6b587ccc346';
    const rightPassword = '1ad3e5d4';
    const rightDatabase = 'heroku_b4ace937aeaf004';
    const wrongUser = 'b7e6b587ccc348';
  
    describe('#fail', function () {
      it.skip('should return an error because wrong credentials', function (done) {
        const connection = mysql.createConnection({
          host: rightHost,
          user: wrongUser,
          password: rightPassword,
          database: rightDatabase
        });
        connection.connect(done);
      });
    });
  
    describe('#success', function () {
      it.skip('should return success connection', function (done) {
        const connection = mysql.createConnection({
          host: rightHost,
          user: rightUser,
          password: rightPassword,
          database: rightDatabase
        });
        connection.connect(done);
      });
    });
  });
  describe('User', function(){
    describe('#create', function () {
      const email = 'mailaaezeeeez@mail.com';
      const password = '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225';
      const firstname = 'firstnameae';
      const lastname = 'lastnameaer';
      const phonenumber = '+33621594825';
      const dateofbirth = '1990-09-22';
      const optinNewsletter = 1;
  
      it("should return create result", function(done){
        expect(
          User.create(email,password,firstname,lastname, phonenumber,dateofbirth,optinNewsletter)
        ).to.eventually.have.property("success").notify(done);
      });
    });
  })*/
});

