const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const connection = require('../../../lib/db');
const User = require('../../../lib/user');

connection();

export default(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){

        }
    } catch (error) {
        
    }
}

export default (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (!err) {
            bcrypt.compare(password, "$2b$10$0vxksGfWYRh4.oyNjvbrP.pwXF2JgGWNYKbtG3x4HIBC2QjzFHfhe", (err, result) => {
                if (!err && result === true) {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ sucess: true }))
                } else {
                    res.statusCode = 401
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ message: 'Authentification error' }))
                }
            })

        } else {
            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'Authentification error' }))
        }

    })


}