var express = require('express'), path = require("path")

const PORT = process.env.PORT || 8080 || 5000 || 3000;

var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

module.exports = app;
