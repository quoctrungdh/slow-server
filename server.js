const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

const users = [
	{ name: 'Peter', gender: 'male' },
	{ name: 'Jane', gender: 'female' },
	{ name: 'Alice', gender: 'female' },
	{ name: 'Jack', gender: 'male' }
]

app.get('/users', function(req, res) {
	setTimeout(function() {
		res.json(users);
	}, 3000);
})

app.listen(3000, function() {
	console.log('Listen')
})