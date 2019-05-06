'use strict'

const https = require('https')

class EzalertMe {
  constructor () {
    this.token = (process.env.EZALERTMEKEY ? process.env.EZALERTMEKEY : '')
  }

  sendAlert (text) {
    if (!this.token) {
      console.log('Missing EZALERTMEKEY env variable!')
    }
    let url = 'https://ezalert.me/v1/sendAlert?apikey=' + encodeURIComponent(this.token) + '&text=' + encodeURIComponent(text)
    return new Promise(function (resolve, reject) {
      var req = https.request(url, function (res) {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error('statusCode=' + res.statusCode))
        }
        // cumulate data
        var body = []
        res.on('data', function (chunk) {
          body.push(chunk)
        })
        // resolve on end
        res.on('end', function () {
          try {
            body = JSON.parse(Buffer.concat(body).toString())
          } catch (e) {
            reject(e)
          }
          resolve(body)
        })
      })
      // reject on request error
      req.on('error', function (err) {
        // This is not a "Second reject", just a different sort of failure
        reject(err)
      })
      // End
      req.end()
    })
  }
}

const ezalertme = new EzalertMe()

module.exports = ezalertme
