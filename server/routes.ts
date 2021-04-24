import * as express from 'express';
export const app = express.Router();
var request = require('request');

export { app as routes};

var globaldata = require('./globaldata.js');


// export var parsedBody: any;




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
    body:req.body,
    json: true
  }, function(err: any, response: any, body: any){
    parsedBody = body.site_name;
    globaldata = response.body.site_name;
    console.log(globaldata);
    console.log(parsedBody);
    
})

});



app.post('/collection', function(req, res, next) { 
 
  // console.log('this is data'+ globaldata);
  // console.log('this is data'+ parsedBody);
  console.log('this is the data', parsedBody);


  request.post({
    url:'https://api.duda.co/api/sites/multiscreen/'+globaldata+'/collection/Asthetic/row', 
    headers: 
    { 
      authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
      'content-type': 'application/json' },
    body:req.body,
    json: true
}).pipe(res);
});



// app.post('/account', function(req, res, next) { 
 
//   console.log(alias);
//   request.post({
//     url:'https://api.duda.co/api/accounts/create', 
//     headers: 
//     { 
//       authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
//       'content-type': 'application/json' },
//     body:req.body,
//     json: true
// }).pipe(res);
// });

// app.post('/permissions', function(req, res, next) { 
 
//   console.log(alias);
//   request.post({
//     url:'https://api.duda.co/api/accounts/account_name/sites/site_name/permissions', 
//     headers: 
//     { 
//       authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
//       'content-type': 'application/json' },
//     body:req.body,
//     json: true
// }).pipe(res);
// });

