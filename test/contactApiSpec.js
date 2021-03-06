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

describe('Test API contact', function () {
  describe('# Test wrong method', function () {
    it('Should return status 400 with message : Only method POST exists', function (done) {
      chai
        .request(host)
        .patch('/api/contact')
        .type('form')
        .send({
          email: 'test@mail.com',
          name: 'nameTest',
          subject: 'subjectTest',
          message: 'messageTest'
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
    it('Should return status 400 with message : A field is missing', function (done) {
      chai
        .request(host)
        .post('/api/contact')
        .type('form')
        .send({
          email: 'test@mail.com',
          name: 'nameTest',
          subject: '',
          message: 'messageTest'
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"A field is missing"}');
          done();
        });
    });
  });
  describe('# Test with an invalid email length', function () {
    it('Should return status 400 with message : Invalid email', function (done) {
      chai
        .request(host)
        .post('/api/contact')
        .type('form')
        .send({
          email: 'te@l.com',
          name: 'nameTest',
          subject: 'subjectTest',
          message: 'messageTest'
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Invalid email"}');
          done();
        });
    });
  });
  describe('# Test with an invalid name', function () {
    it('Should return status 400 with message : Invalid name', function (done) {
      chai
        .request(host)
        .post('/api/contact')
        .type('form')
        .send({
          email: 'mail@mail.com',
          name: 'name8Test',
          subject: 'subjectTest',
          message: 'messageTest'
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res)
            .to.have.property('text')
            .to.equal('{"message":"Invalid name"}');
          done();
        });
    });
  });
  describe('# Success', function () {
    it('Should be a success, return status 200 with success : ok', function (done) {
      chai
        .request(host)
        .post('/api/contact')
        .type('form')
        .send({
          email: 'mail@mail.com',
          name: 'nameTest',
          subject: 'subjectTest',
          message: 'messageTest'
        })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res).to.have.property('text').to.equal('{"success":"ok"}');
          done();
        });
    });
  });
});
