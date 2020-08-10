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

const isLess18ThanYears = (dateofbirth) => {
    dateofbirth = new Date(dateofbirth);
    let eighteenYearsAgo = new Date();
    
    eighteenYearsAgo.setFullYear(new Date().getFullYear() - 18);
    eighteenYearsAgo.setMinutes(0);
    eighteenYearsAgo.setSeconds(0);
    eighteenYearsAgo.setMilliseconds(0);
    return dateofbirth.getTime() > eighteenYearsAgo.getTime();
}

const registerUser = async (email, password, firstname, lastname, phonenumber, dateofbirth, optinNewsletter) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (!err) {
                connection.query(
                    'INSERT INTO user SET email = ?, password = ?, firstname = ?, lastname = ?, phonenumber = ?, dateofbirth = ?, optinNewsletter = ?',
                    [email, hash, firstname, lastname, phonenumber, dateofbirth, optinNewsletter],
                    function (error, results, fields) {
                        if (error) {
                            reject("Couldn't register user");
                        } else {
                            resolve(results);
                        }
                    });
            } else {
                reject("Couldn't register user");
            }
        })
    })

}

export default async (req, res) => {
    const { email, password, firstname, lastname, phonenumber, dateofbirth } = req.body;
    const optinNewsletter = req.body.optinNewsletter === "on" ? true : false;

    if (req.method === "POST") {
        if (!email || !password || !firstname || !lastname || !phonenumber || !dateofbirth) {
            return res.status(401).json({ message: 'A field is missing' });
        } else if (!verifyEmail(email) || email.length > 255 || email.length < 10) {
            return res.status(401).json({ message: 'Invalid email' });
        } else if (password.length < 8) {
            // ajouter contrainte sur nb de chiffres et de lettres
            return res.status(401).json({ message: 'Password is too short' });
        } else if (!verifyName(lastname) || !verifyName(firstname)) {
            return res.status(401).json({ message: 'Invalid firstname or lastname' });
        } else if (!verifyPhonenumber(phonenumber)) {
            return res.status(401).json({ message: 'Invalid phone number' });
        } else if (isLess18ThanYears(dateofbirth)) {
            return res.status(401).json({ message: 'User musts be at least 18 years old' });
        } else {
            try {
                let results = await registerUser(email, password, firstname, lastname, phonenumber, dateofbirth, optinNewsletter);
                return res.status(200).json({ sucess: results.insertId })
            } catch (err) {
                console.log(err);
                return res.status(401).json({ message: err })
            }
        }
    } else {
        return res.status(400).json({ message: 'Only method POST exists' });
    }
}