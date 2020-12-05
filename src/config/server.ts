const configFilePathDefault = "config/config.yml";
var nconf = require("nconf");


nconf
  .file({
    file: process.env["CONFIG_PATH"] || configFilePathDefault,
    format: nconf.formats.yaml
  })
  .env()
  .argv();

const port = nconf.get()["PORT"] || 5656;
const mongoHost = nconf.get()["MONGO_HOST"] || "localhost";
const mongoPort = nconf.get()["MONGO_PORT"] || 27017;
const mongoUser = nconf.get()["MONGO_USER"] || "myusername";
const mongoPassword = nconf.get()["MONGO_PASSWORD"] || "mypass";
const NODE_ENV = nconf.get()["NODE_ENV"] || "localhost";
const module1_socket_ns = nconf.get()["MODULE1_SOCKET_NS"] || "/module1"
export const serverConfiguration = {
  port,
  mongoHost,
  mongoPort,
  mongoUser,
  mongoPassword,
  NODE_ENV,
  module1_socket_ns
};
