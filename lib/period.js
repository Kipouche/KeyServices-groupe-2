const bcrypt = require('bcrypt');
const connection = require('./db');

function Period() {
  this.create = (propertyId, startDate, endDate) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO period SET startDate = ?, endDate = ?, property_id = ?',
        [startDate, endDate, propertyId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't create period"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.update = (id, startDate, endDate) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE period SET startDate = ?, endDate = ? where id = ?',
        [startDate, endDate, id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't update period"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.getById = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM period WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find period"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.getByUserId = (userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM period WHERE property_id in (select id from property where user_id = ?)',
        [userId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find periods"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.getByPropertyId = (propertyId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM period WHERE property_id = ?',
        [propertyId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find periods"));
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
        'DELETE FROM period WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't delete period"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };
}

module.exports = new Period();
