const { Router } = require("express");
// const bcrypt = require('bcryptjs')
// const config = require('config')
// const jwt = require('jsonwebtoken')
// const {check, validationResult} = require('express-validator')
const Home = require('../models/Home')
const router = Router();

// /api/auth/register
router.post("/add2", async (req, res) => {
  try {
    console.log("maladec");
    const home = new Home({ email: "ooooaosod@dsadf" });

    await home.save();

    res.status(201).json({ message: "Пользователь создан" });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});



module.exports = router;
