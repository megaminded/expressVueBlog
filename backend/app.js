const express = require('express')
const app = express();

app.get('/', (req, res) => {
 res.send({
  message: 'Hello world'
 })
});

app.listen(process.env.PORT || 8082, () => {
 console.log("Server running on", process.env.PORT || 8082);
})