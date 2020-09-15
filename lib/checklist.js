const connection = require('./db');

function CheckList() {
  this.create = (
    propertyId,
    userId,
    entree,
    salon,
    toilettes,
    salledebain,
    chambres,
    cuisine,
    salleamanger,
    message
  ) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO checklist SET property_id = ?, user_id = ?, entree = ?, salon = ?, toilettes = ?, salledebain = ?, chambres = ?, cuisine = ?, salleamanger = ?, message = ?',
        [
          propertyId,
          userId,
          entree,
          salon,
          toilettes,
          salledebain,
          chambres,
          cuisine,
          salleamanger,
          message
        ],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't create checklist"));
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
        'SELECT * FROM checklist WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find checklist"));
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
        'SELECT * FROM checklist WHERE user_id = ?',
        [userId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find checklist"));
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
        'SELECT * FROM checklist WHERE property_id = ?',
        [propertyId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find checklist"));
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
        'DELETE FROM checklist WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't delete checklist"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };
}

module.exports = new CheckList();
