// build your `Project` model here

const db = require("../../data/dbConfig");

const getAll = () => {
	// DO YOUR MAGIC
	return db("projects");
};
const createProject = async (project) => {
	const createProject = await db("projects").insert(project).returning("*");
	return createProject;
};
module.exports = { getAll, createProject };
