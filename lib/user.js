const bcrypt = require('bcrypt');
const connection = require('./db');

function User() {
  this.create = (
    email,
    password,
    firstname,
    lastname,
    phonenumber,
    dateofbirth,
    optinNewsletter
  ) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (!err) {
          connection.query(
            'INSERT INTO user SET email = ?, password = ?, firstname = ?, lastname = ?, phonenumber = ?, dateofbirth = ?, optinNewsletter = ?',
            [
              email,
              hash,
              firstname,
              lastname,
              phonenumber,
              dateofbirth,
              optinNewsletter
            ],
            (error, results) => {
              if (error) {
                reject(new Error("Couldn't register user"));
              } else {
                resolve(results);
              }
            }
          );
        } else {
          reject(new Error("Couldn't register user"));
        }
      });
    });
  };

  this.getById = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't register user"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.getByIdClientSide = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT email, firstname, lastname, dateofbirth, phonenumber, created_at FROM user WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error('Error on request'));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.getByEmail = (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE email = ?',
        [email],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't log in user"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.validate = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user set validated = 1 WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't validate user"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };
}

module.exports = new User();
