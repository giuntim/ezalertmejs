/*!
 * EZAlertMeJS
 * Author: Maurizio Giunti (CodeGuru Srl)
 * BSD Licensed
 */

'use strict'

const https = require('https')

class EzalertMe {
  constructor () {
    this.apikey = (process.env.EZALERTME_APIKEY ? process.env.EZALERTME_APIKEY : '')
  }

  /**
   * Send an alert via EZAlert.me
   * @param {string} alertText text of the alert
   * @param {string} apikey optional ezalert.me API key - API key can also be set in env variable EZALERTME_APIKEY
   * @returns {Promise} a Promise with the json sent back from the server
   */
  sendAlert (alertText, apikey) {
    if (!apikey) {
      if (!this.apikey) {
        console.log('Missing EZALERTME_APIKEY env variable!')
      }
      apikey = this.apikey
    }
    let url = 'https://ezalert.me/v1/sendAlert?apikey=' + encodeURIComponent(apikey) + '&text=' + encodeURIComponent(alertText)
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

// Export as singleton
const ezalertme = new EzalertMe()

module.exports = ezalertme
