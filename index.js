var express = require('express');
var app = express();

app.set ('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/api/whoami', function(req, res) {
	var ip = req.ip;
	var language = req.acceptsLanguages()[0];
	var UA = req.header('user-agent').split('(')[1].split(')')[0];
	var response = {ipaddress: ip, language: language, software: UA};
	res.json(response);
});

app.get('/', function(req, res) {
	res.redirect('/api/whoami');
});

app.listen(app.get('port'), function() {
	console.log("Listening on port: " + app.get('port'));
})

