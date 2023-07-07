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

module.exports = router;
