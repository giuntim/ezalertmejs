/*!
 * EZAlertMeJS
 * Author: Maurizio Giunti (CodeGuru Srl)
 * BSD Licensed
 */

const ezalertme = require('ezalertmejs')

// Usually you set EZAlert.me API key as env variable with
// set EZALERTME_APIKEY='Your API key'
// But if you need you can specify it as second argument of the sendAlert() method
// ezalertme.sendAlert('Alert text', 'EZAlert.me API KEY')

ezalertme.sendAlert('Houston, we have a problem!').then(rc => {
  console.log(rc)
  // If I need I can ckeck if returned object is an error (satus==ERROR) or not (status==OK)
  if (rc && rc.status === 'OK') {
    console.log('Ok: Alert Sent')
  } else {
    console.log('Error: alert not sent')
  }
})
