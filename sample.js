const ezalertme = require('./ezalertme')

ezalertme.sendAlert('Houston, we have got a problem!').then(rc => {
  console.log(rc)
})

