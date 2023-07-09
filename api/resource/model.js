// build your `Resource` model here
const db = require("../../data/dbConfig");

const getAll = () => {
	// DO YOUR MAGIC
	return db("resources");
};
const createProject = async (resource) => {
	const createResource = await db("resources").insert(resource).returning("*");
	return createResource;
};
module.exports = { getAll, createProject };
