const express = require('express')
const DB = require('../../config/database')
const route = express.Router();

const fs = require('fs')
const path = require('path')

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
  if (post.title == '' || post.description == '') {
    post.title == '' ?
      res.send({ error: true, message: "Post title cannot be empty" }) :
      res.send({ error: true, message: "Post description cannot be empty" })
  }
  else {
    let stmt = "INSERT INTO POSTS SET title = ?, description = ?";
    DB.query(stmt, [post.title, post.description], (err, rows, field) => {
      if (err) {
        res.send({
          error: true,
          message: err,
        })
        DB.destroy()
      } else {
        res.send({
          error: false,
          message: rows,
        })
        DB.destroy()
      }
    })

  }
})

route.get('/view/:id', (req, res) => {
  let sql = "SELECT * FROM posts WHERE id = ?";
  DB.query(sql, req.params.id, (err, rows, field) => {
    if (err) {
      res.send({
        error: true,
        message: err.sqlMessage
      })
    } else {
      res.send({
        error: false,
        message: "Successful",
        post: rows
      });
    }
  })
})

route.get('/delete/:id', (req, res) => {
  if (!req.params.id) {
    res.send({
      error: true,
      message: 'No post has been selected'
    })
  } else {
    let stmt = "DELETE FROM posts WHERE id = ?";
    DB.query(stmt, req.params.id, (err, rows, field) => {
      if (err) {
        res.send({
          error: true,
          message: err
        });
      } else {
        res.send({
          error: false,
          message: `Deleted ${rows.affectedRows} rows`
        });
      }
    })
  }
})
module.exports = route;