const express = require('express')

const route = express.Router()


route.get('/', (req, res) => {
 res.send([
  {
   name: "Hope",
   age: 32
  }
 ])
})

module.exports = route;