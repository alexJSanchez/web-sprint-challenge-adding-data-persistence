// build your `Project` model here

const db = require("../../data/dbConfig");

const getAll = () => {
  // DO YOUR MAGIC
  return db("projects");
};
function createProject(project) {
  return db("projects").insert(project).returning("*");
}
module.exports = { getAll, createProject };
