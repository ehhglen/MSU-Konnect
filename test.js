var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseURL = "https://reqres.in/api/users?page=2";
var util = require("util");
describe("returns template", function(){
    it('returns templates', function(done){
        request.get({url: baseURL},
            function(error,response,body){
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});