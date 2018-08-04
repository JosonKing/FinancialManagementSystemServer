var crudDao = require('../dao/crudDao.js');

module.exports = {

  getAll: function (id, userId, categoryId, time, callback) {
    let sql = 'SELECT * FROM fms_order WHERE TRUE';
    sql += (id == '' ? '' : ' AND id = ?');
    sql += (userId == '' ? '' : ' AND user_id = ?');
    sql += (categoryId == '' ? '' : ' AND category_id = ?');
    sql += (time == '' ? '' : ' AND time = ?');
    let selectSqlParams = [];
    id == '' ? null : selectSqlParams.push(id);
    userId == '' ? null : selectSqlParams.push(parseInt(userId));
    categoryId == '' ? null : selectSqlParams.push(parseInt(categoryId));
    time == '' ? null : selectSqlParams.push(Date.parse(new Date(time)));
    console.log('sql:' + sql);

    crudDao.query(sql, selectSqlParams, (result) => {
      callback(result);
    });
  },

  add: function (userId, amount, categoryId, time, callback) {
    let sql = 'INSERT INTO fms_order (user_id, amount, category_id, time) VALUES (?,?,?,?)';
    userId = parseInt(userId);
    categoryId = parseInt(categoryId);
    let addSqlParams = [userId, amount, categoryId, time];
    console.log('sql:' + sql);

    crudDao.query(sql, addSqlParams, (result) => {
      callback(result);
    });
  },

  update: function (id, userId, amount, categoryId, time, callback) {
    let sql = 'UPDATE fms_order SET user_id = ?, amount = ?,category_id = ?,time = ? WHERE Id = ?';
    userId = parseInt(userId);
    categoryId = parseInt(categoryId);
    let updateSqlParams = [userId, amount, categoryId, time, id];
    console.log('sql:' + sql);

    crudDao.query(sql, updateSqlParams, (result) => {
      callback(result);
    });
  },

  delete: function (id, callback) {
    let sql = 'DELETE FROM fms_order WHERE id = ?';
    let deleteSqlParams = [id];
    console.log('sql:' + sql);

    crudDao.query(sql, deleteSqlParams, (result) => {
      callback(result);
    });
  }
}