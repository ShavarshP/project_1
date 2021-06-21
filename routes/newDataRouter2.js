const { Router } = require('express')
const Home = require("../models/Home");
const router = Router()

router.get('/houses',  async (req, res) => {
  const candidate = await Home.findOne()
  console.log(candidate);
  res.json( [candidate]);
});

router.post(
  '/myhome',
  async (req, res) => {
  try {
    const id = req.body
    const candidate = await Home.findOne()

    res.json([candidate].filter(hom=>hom.id==id.id));
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post(
  '/add',
  async (req, res) => {
    console.log("maladec");
  try {
    const id = req.body
    console.log(id.length);
    res.json(id);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})




module.exports = router
