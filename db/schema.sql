\c finstadb;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  full_name TEXT,
  phone VARCHAR(50),
  bio VARCHAR(255),
  profpic_url VARCHAR(255)
);

DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  img_url VARCHAR(255),
  caption VARCHAR(255),
  img_file BYTEA
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL,
  comment VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS likes;
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL
);

INSERT INTO users VALUES (DEFAULT, 'rossi', 'password', 'Valentino Rossi', null, null, null);
INSERT INTO users VALUES (DEFAULT, 'lilC', 'password', 'Cynthia ', null, null, null);
INSERT INTO users VALUES (DEFAULT, 'uhmandur', 'password', 'Amanda', null, null, null);
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537198809/samples/ecommerce/accessories-bag.jpg', 'love everything I got in my box!!!!');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449327/Screenshot_20181105-152129_Instagram.jpg', 'SOS.... I got u babe');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449314/Screenshot_20181105-152100_Instagram.jpg', 'I ❤️ Japan');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537200689/crispy-chocolate-chip-cookies.jpg', '🍪');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449549/Screenshot_20181105-152500_Instagram.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449655/Snapchat-450742301.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537198809/samples/ecommerce/accessories-bag.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537198810/samples/food/spices.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449233/Screenshot_20181105-151934_Instagram.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://imgur.com/s8TVefK.jpg', 'The Happiest Place on Earth!');
INSERT INTO comments VALUES (DEFAULT, 1, 1, 'SICKKKKK');
INSERT INTO comments VALUES (DEFAULT, 1, 2, 'youre the cutest');
INSERT INTO likes VALUES (DEFAULT, 1, 1);
INSERT INTO likes VALUES (DEFAULT, 1, 2);
INSERT INTO likes VALUES (DEFAULT, 1, 3);
