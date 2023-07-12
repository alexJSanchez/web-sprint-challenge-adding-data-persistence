// build your `Task` model here
const db = require("../../data/dbConfig");

const getAll = () => {
	return db("tasks").then((tasks) =>
		tasks.map((task) => ({
			...task,
			task_completed: task.task_completed ? true : false,
		}))
	);
};
const createTask = (task) => {
	const createTask = db("tasks").insert(task).returning("*");
	return createTask;
};
module.exports = { getAll, createTask };
