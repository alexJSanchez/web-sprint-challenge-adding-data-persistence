// build your `Project` model here

const db = require("../../data/dbConfig");

const getAll = () => {
  // DO YOUR MAGIC
  return db("projects");
};
module.exports = { getAll };
