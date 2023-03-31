const dotenv = require("dotenv");

dotenv.config();

const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = process.env.PORT ?? "5000";

module.exports = {
    HOST,
    PORT
};