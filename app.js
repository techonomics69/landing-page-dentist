require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN ;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    body: 'This is a test text message!!',
    from: '+19494461307',
    to:'+18043964584'
})

.then(message => console.log(message))
.catch((err) => console.log(err));