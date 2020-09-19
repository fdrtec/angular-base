const express = require('express')
const app = express()

app.use(express.static('./dist/angular-base'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/angular-base'});
});

app.listen(process.env.PORT || 8080);
