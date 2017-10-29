const models = require('../config/db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../map/sqlMap')
var movies = [
  {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
  {id: 102, name: "Inception", year: 2010, rating: 8.7},
  {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
  {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
]

// db connection
const conn = mysql.createConnection(models.mysql)

conn.connect()
const jsonWrite = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: 'Operation Failed'
    })
  } else {
    res.json(ret)
  }
}

// add user
// router.post('/addUser', (req, res) => {
//   var sql = $sql.user.add
//   var params = req.body
//   console.log(params)
//   conn.query(sql, [params.user_id, params.user_pwd], (err, result) => {
//     if (err) {
//       console.log(err)
//     }
//     if (result) {
//       jsonWrite(res, result)
//     }
//   })
// })

router.get('/', function(req, res){
  // res.send("Hello world!")
  res.json(movies)
});

module.exports = router