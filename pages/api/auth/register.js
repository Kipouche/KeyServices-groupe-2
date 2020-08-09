import { send } from '../../../lib/db';

const connection = require('../../../lib/db');
const bcrypt = require('bcrypt');

const verifyEmail = (email) => {
    let regex = /^[a-z0-9_-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    return regex.test(email);
}

const verifyName = (name) => {
    let regex = /^[a-zA-Z-éèâîûüêôöäï]{2,45}$/i;
    return regex.test(name);
}

const verifyPhonenumber = (phonenumber) => {
    let regex = /^(0|\+33)[1-9]( *[0-9]{2}){4}$/i;
    return regex.test(phonenumber);
}

export default (req, res) => {
    const { email, password, firstname, lastname, phonenumber, dateofbirth, optinNewsletter = false } = req.body;

    if (req.method === "POST") {
        if (!email || !password || !firstname || !lastname || !phonenumber || !dateofbirth) {
            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json')
            return res.send(JSON.stringify({ message: 'A field is missing' }))
        } else if (!verifyEmail(email) || email.length > 255 || email.length < 10) {
            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json')
            return res.send(JSON.stringify({ message: 'Invalid email' }))
        } else if (password.length < 8) {
            // ajouter contrainte sur nb de chiffres et de lettres
            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json')
            return res.send(JSON.stringify({ message: 'Password troo short' }))
        } else if (!verifyName(lastname) || !verifyName(firstname)) {
            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json')
            return res.send(JSON.stringify({ message: 'Invalid firstname or lastname' }))
        } else if (!verifyPhonenumber(phonenumber)) {
            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json')
            return res.send(JSON.stringify({ message: 'Invalid phone number' }))
        } else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (!err) {
                    console.log("dans bcrypt");
                    connection.query(
                        'INSERT INTO user SET email = ?, password = ?, firstname = ?, lastname = ?, phonenumber = ?, dateofbirth = ?, optinNewsletter = ?',
                        [email, hash, firstname, lastname, phonenumber, dateofbirth, optinNewsletter],
                        function (error, results, fields) {
                            if (error) {
                                return res.status(500).json({ message: "Couldn't register user" })
                            } else {
                                return res.status(200).json({ sucess: true })
                            }
                        });
                } else {
                    return res.status(401).json({ message: 'Authentification error' })
                }
            })
            console.log("apres bcrypt");
        }
    } else {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        return res.send(JSON.stringify({ message: 'Only method POST exists' }))
    }
}