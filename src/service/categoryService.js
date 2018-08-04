var crudDao = require('../dao/crudDao.js');

module.exports = {

  getAll: function (id, name, callback) {
    let sql = 'SELECT * FROM fms_category WHERE TRUE';
    sql += (id == '' ? '' : ' AND id = ?');
    sql += (name == '' ? '' : ' AND name = ?');
    let selectSqlParams = [];
    id == '' ? null : selectSqlParams.push(id);
    name == '' ? null : selectSqlParams.push(name);
    console.log('sql:' + sql);

    crudDao.query(sql, selectSqlParams, (result) => {
      callback(result);
    });
  },

  add: function (name, callback) {
    let sql = 'INSERT INTO fms_category (name) VALUES (?)';
    let addSqlParams = [name];
    console.log('sql:' + sql);

    crudDao.query(sql, addSqlParams, (result) => {
      callback(result);
    });
  },

  update: function (id, name, callback) {
    let sql = 'UPDATE fms_category SET name = ? WHERE Id = ?';
    let updateSqlParams = [name, id];
    console.log('sql:' + sql);

    crudDao.query(sql, updateSqlParams, (result) => {
      callback(result);
    });
  },

  delete: function (id, callback) {
    let sql = 'DELETE FROM fms_category WHERE id = ?';
    let deleteSqlParams = [id];
    console.log('sql:' + sql);

    crudDao.query(sql, deleteSqlParams, (result) => {
      callback(result);
    });
  }
}