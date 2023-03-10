const db = require('../connection');

const getPasswordsByOrg = () => {
  return db.query('SELECT id, title, login, password FROM passwords WHERE organization_id = 1 ORDER BY id DESC;')
    .then(data => {
      return data.rows;
    })
    .catch((error => {
      console.log(error);
    }));
};

module.exports = { getPasswordsByOrg };
