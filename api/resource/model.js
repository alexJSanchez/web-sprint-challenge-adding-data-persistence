// build your `Resource` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  // DO YOUR MAGIC
  return db("resources");
};
module.exports = { getAll };
