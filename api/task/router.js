// build your `/api/tasks` router here
const taskMod = require("../task/model");
const projectMod = require("../project/model");
const router = require("express").Router();

router.get("/", async (req, res) => {
	try {
		const task = await taskMod.getAll();
		res.status(201).json(task);
	} catch (err) {
		res.json(err);
	}
});

router.post("/", async (res, req) => {
	const task = req.body;
	try {
		const newTask = await taskMod.createTask(task);
		res.status(201).json(newTask[0]);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
});

module.exports = router;
