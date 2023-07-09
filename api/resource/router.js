// build your `/api/resources` router here
const resourceMod = require("../resource/model");
const router = require("express").Router();

router.get("/", async (req, res) => {
	try {
		const resources = await resourceMod.getAll();
		res.status(201).json(resources);
	} catch (err) {
		res.json({ message: err.message });
	}
});

router.post("/", async (req, res) => {
	const resource = req.body;
	try {
		const newResource = await resourceMod.createProject(resource);
		res.status(201).json(newResource[0]);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error creating project", error: error.message });
	}
});

module.exports = router;
