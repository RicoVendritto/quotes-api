const { Router } = require("express");
const speakerRouter = Router();
const { Speaker } = require("../models.js");

speakerRouter.get("/", async (req, res) => {
  try {
    const speakers = await Speaker.findAll();
    res.json(speakers);
  } catch (e) {
    res.json({ error: e.message });
  }
});

speakerRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const speaker = await Speaker.findByPk(id);
    res.json(speaker);
  } catch (e) {
    res.json({ error: e.message });
  }
});

speakerRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    const speaker = await Speaker.create(data);
    res.json({ speaker });
  } catch (e) {
    res.json({ error: e.message });
  }
});

speakerRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const speaker = await Speaker.findByPk(id);
    await speaker.update(data);
    res.json(speaker);
  } catch (e) {
    res.json({ error: e.message });
  }
});

speakerRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const speaker = await Speaker.findByPk(id);
    await speaker.destroy();
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = speakerRouter;
