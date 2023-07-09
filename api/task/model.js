// build your `Task` model here
const db = require("../../data/dbConfig");

const getAll = () => {
	return db("tasks");
};
const createTask = (task) => {
	const createTask = db("tasks").insert(task).returning("*");
	return createTask;
};
module.exports = { getAll, createTask };
