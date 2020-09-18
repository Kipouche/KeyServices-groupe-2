const connection = require('./db');

function Todo() {
  this.create = (propertyId, userId, startDate, endDate, task) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO todo SET startDate = ?, endDate = ?, property_id = ?, user_id = ?, task = ?',
        [startDate, endDate, propertyId, userId, task],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't create todo"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.update = (id, startDate, endDate, task) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE todo SET startDate = ?, endDate = ?, task = ? where id = ?',
        [startDate, endDate, task, id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't update todo"));
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
        'SELECT * FROM todo WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find todo"));
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
        'SELECT * FROM todo WHERE user_id = ?',
        [userId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find todo"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.getByUserIdWithAddress = (userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT t.*, p.address FROM todo t join property p on p.id = t.property_id WHERE t.user_id = ?',
        [userId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find todo"));
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
        'SELECT * FROM todo WHERE property_id = ?',
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

  this.getByProfileIdAndUserId = (propertyId, userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM todo WHERE user_id = ? AND property_id = ?',
        [userId, propertyId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find todo"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.deleteByUserId = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM todo WHERE user_id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't delete todo"));
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
        'DELETE FROM todo WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't delete todo"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };
}

module.exports = new Todo();
