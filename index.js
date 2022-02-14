var http = require('http');
const request = require('request');

http.createServer(function (req, res) {
console.log("+1");
request('http://ip-api.com/json/', (err, res2, body) => {
  if (err) { return console.log(err); }
  res.end(body);
});
}).listen(process.env.PORT);
