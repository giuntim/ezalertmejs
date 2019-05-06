const ezalertme = require('./ezalertme')

// If you need you can set your EZAlert.me apikey here
// ezalertme.token='My EZALert.me API key'

ezalertme.sendAlert('Houston, we have a problem!').then(rc => {
  console.log(rc)
})
