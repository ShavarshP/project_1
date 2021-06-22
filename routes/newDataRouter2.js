const { Router } = require('express')
const Home = require("../models/Home");
const router = Router()

router.get('/houses',  async (req, res) => {
  const candidate = await Home.find()
  console.log(candidate);
  res.json( candidate);
});

router.post(
  '/myhome',
  async (req, res) => {
  try {
    const id = req.body
    const candidate = await Home.find(id)
    res.json(candidate);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post(
  '/filtPage',
  async (req, res) => {
  try {
    const id = req.body
    console.log(id);
    // const candidate = await Home.find(id)
    // console.log("hmmm",candidate);
    // res.json(candidate);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})





module.exports = router
