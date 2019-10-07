var app = require('./api/api');
const bodyParser = require('body-parser');
const https = require('https')
const http = require('http')
const fs = require('fs')
const httpsport = 3000
const httpport = 3001

app.use(bodyParser.json());

const httpsOptions = {
    key:  fs.readFileSync('./security/server_dev.key'),
    cert: fs.readFileSync('./security/server_dev.crt')
  }

const httpsserver = https.createServer(httpsOptions, app).listen(httpsport, () => {
    console.log('server https running at ' + httpsport)
}) 

const httpserver = http.createServer(app).listen(httpport, () => {
  console.log('server http running at ' + httpport)
}) 

