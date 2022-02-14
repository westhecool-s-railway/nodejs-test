var http = require('http');
const request = require('request');

http.createServer(function (req, res) {
request('https://ip.seeip.org/jsonip?', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  res.end(res);
});
}).listen(process.env.PORT);
