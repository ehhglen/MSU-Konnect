import * as express from 'express';
export const app = express.Router();
var request = require('request');
const nodemailer = require("nodemailer");

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
var useremail: any;
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
  body:{"account_type":"CUSTOMER","account_name":req.body.email,"first_name":req.body.fullName,"last_name":""},
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

    request.get({
      url: 'https://api.duda.co/api/accounts/sso/'+req.body.email+'/link',
      headers:
      {
        authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
        'content-type': 'application/json' },
      body:{"permissions":["EDIT","PUBLISH","REPUBLISH"]},
      json: true
    }, function(err: any, response: any, body: any){
          useremail = body.url;
          // //put the tokens in secret file
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'msukonnectdenver@gmail.com',
              pass: 'Makebigbucks1738',
              clientId: '565599873761-9lh6ee0jkqblhlp0cqqfisbmc0bfhlh5.apps.googleusercontent.com',
              clientSecret: 'LaZARr5h_gP0gWR0WxsJTlmR',
              refreshToken: '1//04v8IDcZ2cEnuCgYIARAAGAQSNwF-L9IrJ5pCrTjoAOrNWObjXF2zRJFLn8QgFVAl3NMFbbjLb9sJUCa92_H0whtqZJG4Bkn0Kgo'
            }
          });
          var website_url = 'https://ppanth2481e64a.responsivewebsitebuilder.io/preview/'+parsedBody;

          let mailOptions = {
            from: '"MSU Konnect 👻" <msuKonnect@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Here's your site", // Subject line
            text: "Hello ✔", // plain text body
            html: "Dear "+ req.body.fullName + ","+"<br>" + "<br>" +
            "Congratulations. You can now review your new site!"+ "<br>" + "<br>" +
            "To access it, click the Login URL below and register using the Login email."+ "<br>" + "<br>" +
            "Make sure to save these details for future access."+ "<br>" + "<br>" +
            "Login URL: " + '<a href="'+useremail+'">Login</a>'+ "<br>" + "<br>" +
            "Login Email: "+ req.body.email + "<br>" + "<br>" +
            "Website URL: " + '<a href="'+website_url+'">Your Site </a>'+ "<br>" + "<br>" +
            "Note: The Login URL expires in 30 days, so make sure to access it and set your password before then." + "<br>" + "<br>" +
            "Best,"+ "<br>" + "<br>" +
            "MSU Konnect", // html body
          };


          transporter.sendMail(mailOptions, function(err:any, data:any) {
            if (err) {
              console.log("Error " + err);
            } else {
              console.log("Email sent successfully");
            }
          });

          request.post({
            url:'https://api.duda.co/api/sites/multiscreen/'+parsedBody+'/content',
            headers:
            {
              authorization: 'Basic ZmJiYjBkOGM6bEZydkNsQzBMTFB2',
              'content-type': 'application/json' },
            body:req.body.bdata,
            json: true
        }).pipe(res);

    })

  })

})

})

})

});

//108026591913-em7to57u3ffhbdc3orcpvah53a85erh6.apps.googleusercontent.com
//vT39PlQNYdyNzScXa8mwCgJD
