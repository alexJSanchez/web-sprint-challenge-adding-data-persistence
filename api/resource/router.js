// build your `/api/resources` router here
const resourceMod = require("../resource/model");
const router = require("express").Router();

router.get("/resources", async (req, res) => {
  try {
    const resources = await resourceMod.getAll();
    res.status(201).json(resources);
  } catch (err) {
    res.json({ message: err.message });
  }
});
