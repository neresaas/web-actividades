let express = require('express');

let routerUsers = express.Router();
let users = require('../data/user');

routerUsers.post('/check', (req, res) => {
    let userName = req.body.userName
    let password = req.body.password

    let user = users.find( u => u.name == userName && u.password == password)
    if ( user == null) {
        res.send('Invalid user')
        return
    }
    res.send(' ' + user.name + ' has ' + user.money)
});

module.exports = routerUsers;