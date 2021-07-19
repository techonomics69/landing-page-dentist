require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN ;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    body: 'Test',
    from: '+18042944909',
    to:'+18043964584'
}).then(console.log('Message sent.'))
  .catch((err) => console.log(err));
