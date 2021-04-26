import * as express from 'express';
export const app = express.Router();
var request = require('request');

export { app as routes};

// These are just placeholder routes
app.get('/', function(req, res, next) {
    request({
      uri: 'https://api.duda.co/api/sites/multiscreen/templates',
      'headers': {
        'Authorization': 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
        'Content-Type': 'application/json'
      }
    }).pipe(res);
    
});

var parsedBody: any;
app.post('/template', function(req, res, next) { 
  request.post({
    url:'https://api.duda.co/api/sites/multiscreen/create', 
    headers: 
    { 
      authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
      'content-type': 'application/json' },
    body:{template_id:req.body.template_id},
    json: true
  }, function(err: any, response: any, body: any){
    parsedBody = body.site_name;
    request.post({
      url:'https://api.duda.co/api/sites/multiscreen/'+parsedBody+'/collection/Asthetic/row', 
      headers: 
      { 
        authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
        'content-type': 'application/json' },
      body:req.body.sitedata,
      json: true
  }, function(err: any, response: any, body: any){
    request.post({
      url:'https://api.duda.co/api/accounts/create', 
  headers: 
  { 
    authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
    'content-type': 'application/json' },
  body:{"account_type":"CUSTOMER","account_name":req.body.email,"first_name":req.body.template_id,"last_name":"panth"},
  json: true
  }, function(err: any, response: any, body: any){
    request.post({
      url:'https://api.duda.co/api/accounts/'+req.body.email+'/sites/'+parsedBody+'/permissions', 
      headers: 
      { 
        authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
        'content-type': 'application/json' },
      body:{"permissions":["EDIT","PUBLISH","REPUBLISH"]},
      json: true
  }, function(err: any, response: any, body: any){
   
    request({
      uri: 'https://api.duda.co/api/accounts/sso/'+req.body.email+'/link',
      'headers': {
        'Authorization': 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
        'Content-Type': 'application/json'
      }
    }).pipe(res);

  })
    
})
    
})
    
})

});

//https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/