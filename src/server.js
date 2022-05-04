const express = require('express');
const app = express();
const port = 3025;

app.get('/', (req, res) => {
	res.json({ msg: 'hello world' });
});

app.listen(process.env.PORT || port);
