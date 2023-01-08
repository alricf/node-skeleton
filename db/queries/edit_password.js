const db = require('../connection');

const editPassword = (password) => {
  console.log(password);
  return db.query(`UPDATE passwords
  SET password = $1
  WHERE id = $2
  RETURNING *;`, [password.password, password.id])
    .then(data => {
      return data.rows;
    })
    .catch((error => {
      console.log(error);
    }));
};

module.exports = { editPassword };
