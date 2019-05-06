# ezalertmejs
A simple module to consume https://EZAlert.me API

## How to use it
Module will read your EZAlert.me API key from environment, so be sure to define it before launching Node, like

```
EZALERTMEKEY='YOUR EZALERT.ME API KEY HERE' npm start
```

Use is trivial, just import the module and use the sendAlert() method:

```
const ezalertme = require('./ezalertme.js')

ezalertme.sendAlert('Houston, we have got a problem!')

```






