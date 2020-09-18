import connection from './db';

function Rent() {
  this.create = (startDate, endDate, userID, propertyId) =>
    new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO rent SET startDate = date(?), endDate = date(?), user_id = ?, property_id = ?',
        [startDate, endDate, userID, propertyId],
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

  this.getByPropertyOwner = (userID) =>
    new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM rent WHERE property_id in (select id from property where user_id = ?)',
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

  this.getByPropertyOwnerWithAddressAndPrice = (userID) =>
    new Promise((resolve, reject) => {
      connection.query(
        'SELECT r.*, p.price, p.address FROM rent r join property p on p.id = r.property_id WHERE p.user_id = ?',
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

  this.update = (id, startDate, endDate) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE rent SET startDate = date(?), endDate = date(?) where id = ?',
        [startDate, endDate, id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't update rent"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.deleteByUserId = (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM rent WHERE user_id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't delete rent"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.deleteById = (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM rent WHERE id = ?',
        [id],
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
