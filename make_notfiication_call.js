// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC8d8cd0010ca015592a0a8af56030754a";
const authToken ="f1b48c438fe839cdc86553657b885e30";
const client = require('twilio')(accountSid, authToken);

// client.calls
//       .create({
//          url: 'https://7b74f02821a6.ngrok.io/twiml',
//           to: '+919929164669',
//          from: '+16083363984',
//        })

//        .then(call => console.log(call.sid));
       client.calls
             .create({
                twiml: '<Response><Say>Hello, This call is from Oklahoma Department of Health. This is a reminder regarding the Follow-up link sent to you. Please fill it. Thank you!</Say></Response>',
                to: '+918582807713',
                from: '+16083363984'
              })
             .then(call => console.log(call.sid));