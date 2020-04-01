const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody with Tekton!");
});
 
module.exports.app = app;
