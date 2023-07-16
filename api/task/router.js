// build your `/api/tasks` router here
const taskMod = require("../task/model");
const projectMod = require("../project/model");
const router = require("express").Router();

router.get("/", async (req, res) => {
	const result = [];
	try {
		const task = await taskMod.getAll();
		task.map((item) => {
			result.push({
				task_id: item.task_id,
				task_description: item.task_description,
				task_notes: item.task_notes,
				task_completed: item.task_completed ? true : false,
				project_name: item.project_name,
				project_description: item.project_description,
			});
		});
		res.status(201).json(result);
	} catch (err) {
		res.json(err);
	}
});

router.post("/", async (req, res) => {
	const task = req.body;
	let result = [];
	try {
		const newTask = await taskMod.createTask(task);
		console.log(newTask);
		newTask.map((item) => {
			result = {
				task_completed: item.task_completed ? true : false,
				task_description: item.task_description,
				task_notes: item.task_notes,
			};
		});
		res.status(201).json(result);
	} catch (err) {
		res.json({ "error message": err });
	}
});

module.exports = router;
