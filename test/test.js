// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

//import chai from 'chai';
//import * as chai from 'chai';
//import * as chai from 'chai';
//import { chai } from 'chai';


// describe("returns template", function(){
//     it('returns templates', function(done){
//         request.get({url: baseURL},
//             request.set("Authorization", "Bearer " + token),
//             function(error,response,body){
//                 expect(response.statusCode).to.equal(200);
//                 console.log(body);
//                 done();
//             });
//     });
// });


const chai = require('chai');   
chaiHttp = require('chai-http');
chai.use(chaiHttp);

var should = require("should");
var request = require("request");
//var set = require("request").set;
var expect = require("chai").expect;
//var set = require("chai").set;
var baseURL = "https://api.duda.co";

var mockBaseURL = "https://reqres.in";
//var util = require("util");
var token = 'ZmJiYjBkOGM6bEZydkNsQzBMTFB2';



// it("Get some random Info", function(done) {
//     chai
//       .request(baseURL)
//       .get('/api/sites/multiscreen/templates') //then get the data
//       //.set({"Authorization": `Bearer  ${token}` }) //set the header first
//       .set('Authorization', 'Bearer ' + token)
//       //.set(token,{ type: 'bearer' })
//       .end(function(err, res) {
//         expect(res).to.have.status(200);
//         console.log(res);
//         done();
//       });
//  });

//import * as express from 'express';
const app = require('express');


 describe('Route Index', () => {
    it('should render the index view with title', (done) => {
        chai.request(app)
            .get(mockBaseURL)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res).to.have.header('content-type', 'text/html; charset=utf-8'); 
                expect(res.text).to.contain('Express');
                done();
            });
    });
});