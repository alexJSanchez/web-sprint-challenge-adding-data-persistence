// build your `/api/projects` router here
const projectMod = require("../project/model");
const router = require("express").Router();

router.get("/projects", async (req, res) => {
  try {
    const projects = await projectMod.getAll();
    res.json(projects);
  } catch (err) {
    res.json({ message: err.message });
  }
});
router.post("/projects", async (req, res) => {
  const project = req.body;
  try {
    const newProject = await projectMod.createProject(project);
    res.status(201).json(newProject[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating project", error: error.message });
  }
});

module.exports = router;
