const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors())
app.use(bodyParser.json())

const posts = require('../routes/api/posts');

app.use('/api/posts', posts);

app.get('/', (req, res) => {
  res.send("Hello world")
})
const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
  console.log("Server running on, localhost:", process.env.PORT || PORT);
});
