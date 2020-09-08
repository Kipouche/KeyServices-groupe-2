import connection from './db';

function Rent() {
  this.create = (price, startDate, endDate, userID, propertyID, date) =>
    new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO rent SET price = ?, startDate = ?, endDate = ?, user_id = ?, property_id = ?, date = ?',
        [price, startDate, endDate, userID, propertyID, date],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't create rent"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.getByUserId = (userID) =>
    new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM rent WHERE user_id = ?',
        [userID],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find user rent"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.getByPropertyId = (propertyID) =>
    new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM rent WHERE property_id = ?',
        [propertyID],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find historic rent for this property"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.deleteById = (userID) =>
    new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM rent WHERE user_id = ?',
        [userID],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't delete rent"));
          } else {
            resolve(results);
          }
        }
      );
    });
}
module.exports = new Rent();
