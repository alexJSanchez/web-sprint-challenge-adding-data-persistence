// build your `Project` model here

const db = require("../../data/dbConfig");

const getAll = () => {
  // DO YOUR MAGIC
  return db("projects");
};
const createProject = () => {
  return db("resources");
};
module.exports = { getAll, createProject };
