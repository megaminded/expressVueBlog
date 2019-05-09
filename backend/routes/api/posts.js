const express = require('express')

const DB = require('../../config/database')

const route = express.Router();

route.get('/get', (req, res) => {
 let stmt = "SELECT * FROM POSTS";
 let result = '';
 DB.query(stmt, (err, rows, field) => {
  res.send(rows)
 });
});

route.post('/add', (req, res) => {
 let post = {
  title: req.body.title,
  description: req.body.description
 }
 if (post.title == '') {
  res.send({
   error: true,
   message: "Post title cannot be empty"
  })
 } else if (post.description == '') {
  res.send({
   error: true,
   message: "Post description cannot be empty"
  })
 } else {
  let stmt = "INSERT INTO POSTS SET title = ?, description = ?";
  DB.query(stmt, [post.title, post.description], (err, result) => {
   if (err) {
    res.send({
     error: true,
     message: result,
    })
   } else {
    res.send({
     error: false,
     message: result,
    })
   }
  })

 }
})

module.exports = route;