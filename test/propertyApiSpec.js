const chai = require('chai');
const request = require('request');
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var chaiHttp = require('chai-http');
chai.use(chaiHttp)
const { expect } = chai;
var superagent = require('superagent');

/*const host = process.env.NODE_ENV !== 'development'
            ? 'https://keyserviceshost.vercel.app'
            : 'http://localhost:5000'; */
const host = 'http://localhost:5000';

describe('Test API', function(){
 /*   describe('#contact', function(){
        it('Test wrong method, should return status 400 with message : Only method POST exists', function(done){
            chai.request(host)
            .patch('/api/contact')
            .type('form')
            .send({
                'email': 'test@mail.com',
                'name': 'nameTest',
                'subject': 'subjectTest',
                'message': 'messageTest'
            })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(res).to.have.property('text').to.equal('{"message":"Only method POST exists"}');
                done();  
            });
        })
        it('Test without all fields, should return status 400 with message : A field is missing', function(done){
            chai.request(host)
            .post('/api/contact')
            .type('form')
            .send({
                'email': 'test@mail.com',
                'name': 'nameTest',
                'subject': '',
                'message': 'messageTest'
            })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(res).to.have.property('text').to.equal('{"message":"A field is missing"}');
                done();  
            });
        })
        it('Test with invalid email length, should return status 400 with message : Invalid email', function(done){
            chai.request(host)
            .post('/api/contact')
            .type('form')
            .send({
                'email': 'te@l.com',
                'name': 'nameTest',
                'subject': 'subjectTest',
                'message': 'messageTest'
            })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(res).to.have.property('text').to.equal('{"message":"Invalid email"}');
                done();  
            });
        })
        it('Test with invalid name, should return status 400 with message : Invalid name', function(done){
            chai.request(host)
            .post('/api/contact')
            .type('form')
            .send({
                'email': 'mail@mail.com',
                'name': 'name8Test',
                'subject': 'subjectTest',
                'message': 'messageTest'
            })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(res).to.have.property('text').to.equal('{"message":"Invalid name"}');
                done();  
            });
        })
        it('Should be a success, return status 200 with success : ok', function(done){
            chai.request(host)
            .post('/api/contact')
            .type('form')
            .send({
                'email': 'mail@mail.com',
                'name': 'nameTest',
                'subject': 'subjectTest',
                'message': 'messageTest'
            })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.have.property('text').to.equal('{"success":"ok"}');
                done();  
            });
        })
    })
    describe('#Property', function(){
        it('GET method', function(done){
            chai.request(host)
            .get('/api/property')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();  
            });
        })
        it('not GET method', function(done){
            chai.request(host)
            .patch('/api/property')
            .end(function (err, res) {
                expect(res).to.have.property('text').to.equal('ok');
                done();  
            });
        })
    })*/
})