# ezalertmejs
A simple module to send alerts to via Telegram, Messenger, Skype or Slack, with https://EZAlert.me API

## What is EZAlert.me
EZAlert.me is a service to easily push alert messages from your Apps to a selected number of users via standard Istant Messages services, like Telegram, Facebook Messenger and Skype, or via Slack.

EZAlert.me is very easy to use because you just have to call a REST API. Anyway this module makes it even easier because you only have to import it and use the sendAlert() function.

## How EZAlert.me works
Create an account o EZAlert.me and get a distribution channel. Each channel has an *API key* and a *start code*. You must send your *start code* to EZAlert.me bot to let it know you want to receive messages from that channel: add EZAlert.me bot on your Telegram, Messenger or Skype app, and start a conversation with it by sending the start command (detailed instructions available at https://ezalert.me/help ). 
After you joined your channel, you are ready to broadcast alerts from your app to your channel calling EZAlert.me REST Api with this module.

## How to use this module
*ezalertmejs* module will get your channel API key from environment, so be sure to define it before launching Node, like

```

EZALERTME_APIKEY='YOUR EZALERT.ME API KEY HERE' node main.js

```

Sending an alert is very easy, just import the module and call *sendAlert()* method:

```

const ezalertme = require('ezalertmejs')

ezalertme.sendAlert('Houston, we have a problem!')

```

If you don't want to use *EZALERTME_APIKEY* env variable, you can specify API key at runtime. Add it as second argument of *sendAlert()* method:

```

const ezalertme = require('ezalertmejs')

ezalertme.sendAlert('Houston, we have a problem!','My EZAlert.me API key')

```

## Installation
This module is available on npm. Install it with:

```

npm i ezalertmejs

```
