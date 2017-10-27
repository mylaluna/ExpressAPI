const sqlMap = {
  //user
  user: {
    add: 'INSERT INTO user(`user_name`, `user_pwd`) VALUES (?, ?)'
  }
}

module.exports = sqlMap