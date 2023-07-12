// build your `Resource` model here
const db = require("../../data/dbConfig");

const getAll = () => {
	// DO YOUR MAGIC
	return db("resources");
};
const createProject = (resource) => {
	return db("resources").insert(resource).returning("*");
};
module.exports = { getAll, createProject };
