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
              email.toLowerCase(),
              hash,
              firstname.toLowerCase(),
              lastname.toLowerCase(),
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
            reject(new Error("Couldn't find user"));
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
        'SELECT id, email, firstname, lastname, dateofbirth, phonenumber, avatar, created_at FROM user WHERE id = ?',
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

  this.getAllClientSide = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id, email, firstname, lastname, dateofbirth, phonenumber, created_at FROM user WHERE validated = 1 and role = "member"',
        [],
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

  this.getFieldWorkers = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id, email, firstname, lastname, dateofbirth, phonenumber, created_at FROM user WHERE validated = 1 and role = "fieldworker"',
        [],
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

  this.getAll = () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id, email, firstname, lastname, dateofbirth, phonenumber, role, created_at FROM user WHERE validated = 1',
        [],
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

  this.updateRole = (id, role) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user set role = ? WHERE id = ?',
        [role, id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't update user"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.updateAvatar = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user set avatar = "1" WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't update user"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.updatePassword = (id, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (!err) {
          connection.query(
            'UPDATE user set password = ? WHERE id = ?',
            [hash, id],
            (error, results) => {
              if (error) {
                reject(new Error("Couldn't update user"));
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

  this.updateProfile = (id, firstname, lastname, phonenumber, dateofbirth) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user set firstname=?, lastname=?, phonenumber=?, dateofbirth=? WHERE id=?',
        [
          firstname.toLowerCase(),
          lastname.toLowerCase(),
          phonenumber,
          dateofbirth,
          id
        ],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't Update your profile"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.deleteById = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM user WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't update user"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };
}

module.exports = new User();
