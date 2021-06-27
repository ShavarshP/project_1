const { Router } = require("express");
const Home = require("../models/Home");
const router = Router();
const createSbjectSearch = require("../module/filt_func")

router.post("/filtPage", async (req, res) => {
  try {
    const body = req.body;
    let newBody = {};
    for (let prop in body) {
      if (body[prop]) {
        newBody[prop] = body[prop];
      }
    }
    console.log("maladec");
    const filter = await createSbjectSearch(newBody);

    const candidate = await Home.find(filter).sort({ $natural: -1 });
    res.json(candidate);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
