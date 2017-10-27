const models = require('../config/db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../map/sqlMap')

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
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add
  var params = req.body
  console.log(params)
  conn.query(sql, [params.user_id, params.user_pwd], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router