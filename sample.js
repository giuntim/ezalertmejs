const ezalertme = require('./ezalertme')

// Usually you set EZAlert.me apikey as env variable with
// set EZALERTMEKEY='Your API key'
// But if you need you can set your it in the code with
// ezalertme.token='My EZALert.me API key'

ezalertme.sendAlert('Houston, we have a problem!').then(rc => {
  console.log(rc)
  // If I need I can ckeck if returned object is an error (satus==ERROR) or not (status==OK)
  if (rc && rc.status === 'OK') {
    console.log('Ok: Alert Sent')
  } else {
    console.log('Error: alert not sent')
  }
})
