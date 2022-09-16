const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Tanisha',
    email: 'tanishajoshi14@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

module.exports = users
