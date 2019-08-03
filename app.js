// as we need to make https requests we import 'https' module
var https = require('https');
const TOKEN =
  'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjI5OTY5ODIsXCJpXCI6NjQzNjk0NyxcImNcIjo0NjEyOTIzLFwidVwiOjY0MjY0MDIsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1NjQ4MzcyMjd9.t3-onBAJTPicQNFumsFz-a0mIt31MkHKBHJwZeFy9e4';
// store permanent token
var permanent_token = TOKEN;

// prepare params for request:
var options = {
  agent: false
};

// host for request
options.hostname = 'www.wrike.com';

// Wrike API uses the https protocol so you need 443 port
options.port = 443;

// Wrike API allows use method param
options.method = 'GET';

// Set up Authorization header using permanent token:
options.headers = { Authorization: 'bearer ' + permanent_token };

// set up API endpoint, suppose we want to get info about the user who
// generates tokens(see
// https://developers.wrike.com/documentation/api/methods/query-contacts)
options.path = '/api/v4/contacts';

//make HTTP request
var req = https.request(options, function(res) {
  var body = [];
  res
    .on('data', function(data) {
      //collect data from server
      body.push(data);
    })
    .on('end', function() {
      body = Buffer.concat(body);
      //parse data form server
      var user = JSON.parse(body.toString()).data[0];
      console.log(JSON.parse(body.toString()).data);
      //print data
      printUserInfo(user);
    });
});

function printUserInfo(user) {
  //print out   information about user who generates permanent
  //token for this application to console
  console.log('name       -', user.firstName);
  console.log('last name  -', user.lastName);
  console.log('id         -', user.id);
  console.log('accountId  -', user.profiles[0].accountId);
  console.log('email      -', user.profiles[0].email);
}

req.end();
