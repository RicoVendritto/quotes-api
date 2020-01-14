const { Router } = require("express");
const quoteRouter = Router({ mergeParams: true });
const { Quote, Speaker } = require("../models.js");

quoteRouter.get("/", async (req, res) => {
  try {
    const speakerId = req.params.speakerId;
    const quotes = await Quote.findAll({
      where: { speakerId }
    });
    res.json(quotes);
  } catch (e) {
    res.json({ error: e.message });
  }
});

quoteRouter.get("/:id", async (req, res) => {
  try {
    const quoteId = req.params.id;
    const quote = await Quote.findByPk(quoteId);
    res.json(quote);
  } catch (e) {
    res.json({ error: e.message });
  }
});

quoteRouter.post("/", async (req, res) => {
  try {
    const speakerId = req.params.speakerId;
    const data = req.body;
    const speaker = await Speaker.findByPk(speakerId);
    const quote = await Quote.create(data);
    await quote.setSpeaker(speaker);
    res.json(quote);
  } catch (e) {
    res.json({ error: e.message });
  }
});

quoteRouter.put("/:id", async (req, res) => {
  try {
    const quoteId = req.params.id;
    const data = req.body;
    const quote = await Quote.findByPk(quoteId);
    await quote.update(data);
    res.json(quote);
  } catch (e) {
    res.json({ error: e.message });
  }
});

quoteRouter.delete("/:id", async (req, res) => {
  try {
    const quoteId = req.params.id;
    const quote = await Quote.findByPk(quoteId);
    await quote.destroy();
    res.json("DELETED");
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = quoteRouter;
