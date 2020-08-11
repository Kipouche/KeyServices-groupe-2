const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const connection = require('../../../lib/db');
const User = require('../../../lib/user');
const InputValidation = require('../../../lib/inputValidation');

export default async (req, res) => {
    // Création des contantes pr récupérer le email et password de la page login qui vont etre egal au body de la requete
    const {
        email,
        password
    } = req.body;

    if (req.method === 'POST') {
        if(!email || !password){
            return res.status(401).json({ message: 'A field is missing' });
        }
        if (!InputValidation.verifyEmail(email)) {
            return res.status(401).json({ message: 'Invalid email' });
        }
        try {
            const results = await User.getByEmail(
              email
            );
            return res.status(200).json({ sucess: results.insertId });
          } catch (err) {
            return res.status(401).json({ message: err.message });
          }
    }


    /*
    - vérifier la validité des input (existence, format), importer et utiliser les méthodes de la classe InputValidation 
    - si valides, récupérer le user par son email en BDD
    - si existant, utiliser la fonction compare de bcrypt en comparant le mdp en base, et le mdp en clair reçu
    - si OK, retour 200
    - Le reste, retour 401
    */
  
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