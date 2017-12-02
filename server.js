const express = require('express');
const app = express();
const http = require('http').Server(app);
const twilio = require('twilio');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // insert Account SID here
const authToken = 'your_auth_token';   // insert auth token here

const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'wooga chakka',
    to: '+14159481805',  // Text this number
    from: '+14158181712 ' // From a valid Twilio number
})
.then((message) => console.log(message.sid));