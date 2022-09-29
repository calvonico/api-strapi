// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// path: ./config/database.js`

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', 
  connection: {
        host: env('DATABASE_HOST', 'https://api.nicocalvo.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'basedatos'),
        user: env('DATABASE_USERNAME', 'sammy'),
        password: env('DATABASE_PASSWORD', 'password'),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
       },
      },
      debug: false,
  },
});
