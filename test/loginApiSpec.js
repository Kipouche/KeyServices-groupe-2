const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const Confirm = require('../pages/api/auth/confirm');

chai.use(chaiAsPromised);
const chaiHttp = require('chai-http');
const sha256 = require('sha256');

chai.use(chaiHttp);
const { expect } = chai;

/* const host = process.env.NODE_ENV !== 'development'
            ? 'https://keyserviceshost.vercel.app'
            : 'http://localhost:5000'; */
const host = 'http://localhost:5000';

describe('Test API login', async function () {
  const email = `${
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  }@mail.com`;
  const password = '123456789';

  before(function (done) {
    chai
      .request(host)
      .post('/api/auth/register')
      .type('form')
      .send({
        email,
        password,
        firstname: 'firstnameTest',
        lastname: 'lastnameTest',
        phonenumber: '0610101010',
        dateofbirth: '1995-11-18'
      })
      .then(function (res) {
        const id = res.body.success;
        const token = sha256(
          `${res.body.success}0e259e21-dce4-4d39-b37d-d183deee828e`
        );
        chai
          .request(host)
          .post(`/api/auth/confirm?id=${id}&token=${token}`)
          .end(function (err, res) {
            done();
          });
      });
  });
  describe('# Test with an invalid method', function () {
    it('Should return status 405 with message : Only method POST required', function (done) {
      chai
        .request(host)
        .patch('/api/auth/login')
        .type('form')
        .send({
          email,
          password
        })
        .end(function (err, res) {
          expect(res).to.have.status(405);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Only method POST required"}');
          done();
        });
    });
  });

  describe('# Test without all fields', function () {
    it('Should return status 401 with message : A field is missing', function (done) {
      chai
        .request(host)
        .post('/api/auth/login')
        .type('form')
        .send({
          email: '',
          password
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
  describe('# Test with an invalid email format', function () {
    it('Should return status 401 with message : Invalid email', function (done) {
      chai
        .request(host)
        .post('/api/auth/login')
        .type('form')
        .send({
          email: 'mail.mail',
          password
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
  describe('# Test without any problem', function () {
    it('Should return status 200 with message : Connected', function (done) {
      chai
        .request(host)
        .post('/api/auth/login')
        .type('form')
        .send({
          email,
          password
        })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
