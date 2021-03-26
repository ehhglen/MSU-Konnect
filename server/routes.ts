import * as express from 'express';
export const app = express.Router();
var request = require('request');
export { app as routes};
var alias: any;

alias = '64093dc3';

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

app.post('/template', function(req, res, next) { 
  request.post({
    url:'https://api.duda.co/api/sites/multiscreen/create', 
    headers: 
    { 
      authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
      'content-type': 'application/json' },
    body:req.body,
    json: true
}).pipe(res);
});

app.post('/collection', function(req, res, next) { 
  request.post({
    url:'https://api.duda.co/api/sites/multiscreen/'+alias+'/collection/Asthetic/row', 
    headers: 
    { 
      authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
      'content-type': 'application/json' },
    body:req.body,
    json: true
}).pipe(res);
});


//app.post('/template', (req, res) => res.send({body: req.body}));
