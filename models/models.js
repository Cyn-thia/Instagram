const db = require('../db/config');
const Model = {};

//explorer page
Model.findAll = () => {
  return db.query(`
    SELECT pictures.id, pictures.user_id, pictures.img_url, pictures.caption, users.username
    FROM pictures
    JOIN users
    ON pictures.user_id = users.id
    ORDER BY pictures.id DESC;
  `)
}

//newsfeed after login
Model.findUser = (username) => {
  return db.query(`
    SELECT *
    FROM users
    WHERE username = $1
  `, username)
}

Model.findByUsername = id => {
  return db.oneOrNone(
    `
    SELECT pictures.id AS pic_id, pictures.img_url, pictures.caption, users.username FROM pictures
    JOIN users
    ON pictures.user_id = users.id
    WHERE users.username = $1
  `,
    [id]
  );
};

Model.create = users => {
  return db.one(
    `
    INSERT INTO users
    (username, password, full_name, phone, bio, profpic_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `,
    [users.username, users.password, users.full_name, users.phone, users.bio, users.profpic_url]
  );
};

// Model.create = pictures => {
//   return db.one(
//     `
//     INSERT INTO pictures
//     (user_id, img_url)
//     VALUES ($1, $2)
//     RETURNING *
//   `,
//     [pictures.user_id, pictures.img_url]
//   );
// };

Model.update = (users, id) => {
  return db.one(
    `
    UPDATE users SET
      username = $1,
      password = $2,
      full_name = $3,
      phone = $4,
      bio = $5,
      profpic_url = $6
    WHERE id = $7
    RETURNING *
  `,
    [users.username, users.password, users.full_name, users.phone, users.bio, users.profpic_url]
  );
};

Model.destroy = id => {
  return db.none(
    `
    DELETE FROM pictures
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Model
