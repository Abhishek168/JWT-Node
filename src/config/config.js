require('dotenv').config();

const x = {
	development: {
		username: 'authUser',
    password: 'auth123',
    database: 'auth',
    host: 'localhost',
    dialect: 'postgres',
  },
  prod: {
		username: 'authUser',
    password: 'auth123',
    database: 'auth',
    host: 'localhost',
    dialect: 'postgres',
  },
  stag: {
		username: 'authUser',
    password: 'auth123',
    database: 'auth',
    host: 'localhost',
    dialect: 'postgres',
  },
};

module.exports = x;
