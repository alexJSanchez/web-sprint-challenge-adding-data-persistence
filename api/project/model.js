// build your `Project` model here
const knex = require("knex");
const db = require("../../data/dbConfig");

const getAll = () => {
  // DO YOUR MAGIC
  return db("project");
};
module.exports = { getAll };
