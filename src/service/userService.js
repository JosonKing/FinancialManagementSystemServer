var crudDao = require('../dao/crudDao.js');

module.exports = {

  getAll: function (id, name, email, callback) {
    let sql = 'SELECT * FROM fms_user WHERE TRUE';
    sql += (id == '' ? '' : ' AND id = ?');
    sql += (name == '' ? '' : ' AND name = ?');
    sql += (email == '' ? '' : ' AND email = ?');
    let selectSqlParams = [];
    id == '' ? null : selectSqlParams.push(id);
    name == '' ? null : selectSqlParams.push(name);
    email == '' ? null : selectSqlParams.push(email);
    console.log('sql:' + sql);

    crudDao.query(sql, selectSqlParams, (result) => {
      callback(result);
    });
  },

  add: function (name, password, email, callback) {
    let sql = 'INSERT INTO fms_user (name, password, email) VALUES (?,?,?)';
    let addSqlParams = [name, password, email];
    console.log('sql:' + sql);

    crudDao.query(sql, addSqlParams, (result) => {
      callback(result);
    });
  },

  update: function (id, name, password, email, callback) {
    let sql = 'UPDATE fms_user SET name = ?,password = ?,email = ? WHERE Id = ?';
    let updateSqlParams = [name, password, email, id];
    console.log('sql:' + sql);

    crudDao.query(sql, updateSqlParams, (result) => {
      callback(result);
    });
  },

  delete: function (id, callback) {
    let sql = 'DELETE FROM fms_user WHERE id = ?';
    let deleteSqlParams = [id];
    console.log('sql:' + sql);

    crudDao.query(sql, deleteSqlParams, (result) => {
      callback(result);
    });
  }
}