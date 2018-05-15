const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '7b029fb6',
  apiSecret: 'zYdkNKJFPVYB9HyX'
});

nexmo.message.sendSms('9716273125', '9258725330', 'TEXT', (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(responseData, null, 2));  
  }
});