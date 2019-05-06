# ezalertmejs
A simple module to send alerts to via Telegram, Messenger, Skype or Slack, via https://EZAlert.me API

## What is EZAlert.me
EZAlert.me is a service that allows you to easily push alert messages from your Apps to a selected number of users via standard Istant Messages services, like Telegram, Facebook Messenger, Skype, or via Slack.

EZAlert.me is very easy to use because you just have to call a REST API. Anyway this module makes it even easier because you only have to import it and use the sendAlert() function.

## How EZAlert.me works
Create an account o EZAlert.me and get a distribution channel. Each channel has an *API key* and a *start code*. You must send your *start code* to EZAlert.me bot to let it know you want to receive messages from your channel: add EZAlert.me bot on your Telegram, Messenger or Skype app, and start a conversation with it by sending the start command (detailed instructions available at https://ezalert.me/help ). 
After you joined your channel, you are ready to send alerts from your app to your channel calling EZAlert.me REST Api with this module.

## How to use this module
Module will read your EZAlert.me API key from environment, so be sure to define it before launching Node, like

```
EZALERTMEKEY='YOUR EZALERT.ME API KEY HERE' node main.js
```

Module use is trivial, just import the module and call sendAlert() method:

```
const ezalertme = require('./ezalertme.js')

ezalertme.sendAlert('Houston, we have a problem!')

```

If you need you can dynamically change API key at runtime, just set it in *token* property:

```
const ezalertme = require('./ezalertme.js')

ezalertme.token='My EZAlert.me API key'

ezalertme.sendAlert('Houston, we have a problem!')

```

## Installation
This module is now available on npm. Install it with:

```
npm i ezalertmejs
```
