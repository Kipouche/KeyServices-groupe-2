const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

/* const host = process.env.NODE_ENV !== 'development'
            ? 'https://keyserviceshost.vercel.app'
            : 'http://localhost:5000'; */
const host = 'http://localhost:5000';

describe('Test API register', function () {
  describe('# Test wrong method', function () {
    it('Should return status 400 with message : Only method POST exists', function (done) {
      chai
        .request(host)
        .patch('/api/auth/register')
        .type('form')
        .send({
          email: 'test@mail.com',
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '0610101010',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Only method POST exists"}');
          done();
        });
    });
  });
  describe('# Test without all fields', function () {
    it('Should return status 401 with message : A field is missing', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'test@mail.com',
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"A field is missing"}');
          done();
        });
    });
  });
  describe('# Test with an invalid email length', function () {
    it('Should return status 401 with message : Invalid email', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'l@g.cm',
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '0610101010',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Invalid email"}');
          done();
        });
    });
  });
  describe('# Test with an invalid email format', function () {
    it('Should return status 401 with message : Invalid email', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'test.com',
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '0610101010',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Invalid email"}');
          done();
        });
    });
  });
  describe('# Test with an invalid password length', function () {
    it('Should return status 401 with message : Password is too short', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'test@mail.com',
          password: '1234567',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '0610101010',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Password is too short"}');
          done();
        });
    });
  });
  describe('# Test with an invalid firstname', function () {
    it('Should return status 401 with message : Invalid firstname or lastname', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'test@mail.com',
          password: '123456789',
          firstname: 'firstname@Te2st',
          lastname: 'lastnameTest',
          phonenumber: '0610101010',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Invalid firstname or lastname"}');
          done();
        });
    });
  });
  describe('# Test with an invalid laststname', function () {
    it('Should return status 401 with message : Invalid firstname or lastname', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'test@mail.com',
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastname2Test',
          phonenumber: '0610101010',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Invalid firstname or lastname"}');
          done();
        });
    });
  });
  describe('# Test with an invalid phonenumber', function () {
    it('Should return status 401 with message : Invalid phone number', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'test@mail.com',
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '010101010',
          dateofbirth: '1990-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Invalid phone number"}');
          done();
        });
    });
  });
  describe('# Test with an age < 18', function () {
    it('Should return status 401 with message : User musts be at least 18 years old', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: 'test@mail.com',
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '0610101010',
          dateofbirth: '2005-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(401);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"User musts be at least 18 years old"}');
          done();
        });
    });
  });
  describe('# Test without any problem', function () {
    it('Should return status 200 with success', function (done) {
      chai
        .request(host)
        .post('/api/auth/register')
        .type('form')
        .send({
          email: `${Math.random().toString(36).substring(2, 8)}@mail.com`,
          password: '123456789',
          firstname: 'firstnameTest',
          lastname: 'lastnameTest',
          phonenumber: '0610101010',
          dateofbirth: '1995-11-18'
        })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res).to.have.property('text').to.include('success');
          done();
        });
    });
  });
});
