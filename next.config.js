const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "root",
        mongodb_password: "root",
        mongodb_custername: "cluster0",
        mongodb_database: "my-site",
      },
    };
  }
  return {
    env: {
      mongodb_username: "root",
      mongodb_password: "root",
      mongodb_custername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};