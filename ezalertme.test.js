'use strict'

const ezalertme = require('./ezalertme.js')

test('Send an alert via https://EZAlert.me', () => {
  return ezalertme.sendAlert('EZalert.me JS test').then( data => {
    console.log(data)
    expect(data.status).toBeDefined()
  })
})
