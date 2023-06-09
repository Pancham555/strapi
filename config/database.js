const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false, // set to true if your PostgreSQL server has a valid SSL/TLS certificate
      },
    },
    options: {
      ssl: false,
    },
  },
});

/*

const parse = require("pg-connection-string").parse;
module.exports = ({ env }) => {
  // if (env("NODE_ENV") === "production") {
  //   const config = parse(process.env.DATABASE_URL);
  //   return {
  //     defaultConnection: "default",
  //     connection: {
  //       client: "postgres",
  //       connection: {
  //         host: config.host,
  //         port: config.port,
  //         database: config.database,
  //         user: config.user,
  //         password: config.password,
  //         ssl: {
  //           rejectUnauthorized: false, // set to true if your PostgreSQL server has a valid SSL/TLS certificate
  //         },
  //       },
  //       options: {
  //         ssl: false,
  //       },
  //     },
  //   };
  // }

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "sqlite",
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};


*/
