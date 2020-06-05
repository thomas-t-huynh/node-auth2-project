const db = require('../data/dbconfig')

module.exports = {
    get
}

function get(department) {
    return db('users').where({department}).select('users.username', 'users.department')
}