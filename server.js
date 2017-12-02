const express = require('express')
const app = express()
const http = require('http').Server(app)
const twilio = require('twilio')
const bodyParser = require('body-parser')

const accountSid = 'AC1825baa6715668cc7ca186d32a1b57c7'
const authToken = ''

const client = new twilio(accountSid, authToken)

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.post('/sendMessage', function(req, res) {
  client.messages.create({
		body: req.body.reminder_message,
		to: '+1' + req.body.phone_number,  // Text this number
		from: '+14158181712 ' // From a valid Twilio number
	})
	.then((message) => console.log(message.sid))
});

app.listen(3000, () => console.log('Listening on port 3000!'))
