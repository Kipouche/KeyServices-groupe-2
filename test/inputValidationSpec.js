const chai = require('chai');

const { expect } = chai;

const InputValidation = require('../lib/inputValidation');

describe('Test InputValidation functions', function () {
  describe('#verifyEmail', function () {
    const rightEmail = 'mail@mail.com';
    const wrongEmail = 'mail.com';

    it('function should exist', function () {
      expect(InputValidation.verifyEmail).to.be.a('function');
    });

    it('test with a valid email, should return success', function () {
      expect(InputValidation.verifyEmail(rightEmail)).to.be.true;
    });

    it('test with an invalid email, should return an error', function () {
      expect(InputValidation.verifyEmail(wrongEmail)).to.be.false;
    });
  });
  describe('#verifyName', function () {
    const rightName = 'Dupond';
    const wrongName = 'Du89P,i';
    it('function should exist', function () {
      expect(InputValidation.verifyName).to.be.a('function');
    });

    it('test with a valid name, should return success', function () {
      expect(InputValidation.verifyName(rightName)).to.be.true;
    });

    it('test with an invalid name, should return an error', function () {
      expect(InputValidation.verifyName(wrongName)).to.be.false;
    });
  });
  describe('#verifyAddress', function () {
    const rightAddress = '18 rue Lafayette';
    const wrongAddress = '1.8 rue Lafayette 2';
    it('function should exist', function () {
      expect(InputValidation.verifyAddress).to.be.a('function');
    });

    it('test with a valid address, should return success', function () {
      expect(InputValidation.verifyAddress(rightAddress)).to.be.true;
    });

    it('test with an invalid address, should return an error', function () {
      expect(InputValidation.verifyAddress(wrongAddress)).to.be.false;
    });
  });
  describe('#verifyInteger', function () {
    const rightInterger = 18;
    const wrongInterger = 1.8;
    it('function should exist', function () {
      expect(InputValidation.verifyInteger).to.be.a('function');
    });

    it('test with a valid integer, should return success', function () {
      expect(InputValidation.verifyInteger(rightInterger)).to.be.true;
    });

    it('test with an invalid integer, should return an error', function () {
      expect(InputValidation.verifyInteger(wrongInterger)).to.be.false;
    });
  });
  describe('#verifyPhonenumber', function () {
    const rightPhoneNumber = '+33621594825';
    const wrongPhoneNumber = '158';
    it('function should exist', function () {
      expect(InputValidation.verifyPhonenumber).to.be.a('function');
    });

    it('test with a valid phone number, should return success', function () {
      expect(InputValidation.verifyPhonenumber(rightPhoneNumber)).to.be.true;
    });

    it('test with an invalid phone number, should return an error', function () {
      expect(InputValidation.verifyPhonenumber(wrongPhoneNumber)).to.be.false;
    });
  });
  describe('#isLess18ThanYears', function () {
    const major = new Date('1990-09-22');
    const minor = new Date('2018-09-22');
    it('function should exist', function () {
      expect(InputValidation.isLess18ThanYears).to.be.a('function');
    });

    it('test with an age > 18, should return success', function () {
      expect(InputValidation.isLess18ThanYears(major)).to.be.false;
    });

    it('test with an age < 18, should return an error', function () {
      expect(InputValidation.isLess18ThanYears(minor)).to.be.true;
    });
  });
});
