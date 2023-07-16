// build your `Task` model here
const db = require("../../data/dbConfig");

const getAll = async () => {
	const data = await db("projects as p")
		.join("tasks as t", "p.project_id", "t.project_id")
		.select(
			"t.task_id",
			"t.task_description",
			"t.task_notes",
			"t.task_completed",
			"p.project_id",
			"p.project_name",
			"p.project_description"
		);

	return data;
	// return db("tasks").then((tasks) =>
	// 	tasks.map((task) => ({
	// 		...task,
	// 		task_completed: task.task_completed ? true : false,
	// 	}))
	// );
};
const createTask = (task) => {
	const createTask = db("tasks").insert(task).returning("*");
	return createTask;
};
module.exports = { getAll, createTask };
