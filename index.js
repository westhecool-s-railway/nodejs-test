var http = require('http');
const request = require('request');

http.createServer(function (req, res) {
request('http://ip-api.com/json/', (err, res2, body) => {
  if (err) { return console.log(err); }
  res.end(body);
});
}).listen(process.env.PORT);
