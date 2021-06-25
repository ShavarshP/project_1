const { Router } = require("express");
const Home = require("../models/Home");
const router = Router();

const createSbjectSearch = (obj) => {
  let newObj = {};
  console.log(obj);
  if (obj.min_price || obj.max_price) {
    newObj.price = {};
  }
  if (obj.min_area || obj.max_area) {
    newObj.area = {};
  }

  if (obj.min_floor || obj.max_floor) {
    newObj.floor = {};
  }

  for (var prop in obj) {
    switch (prop) {
      case "min_price":
        newObj.price.$gte = obj[prop];
        break;
      case "max_price":
        newObj.price.$lte = obj[prop];
        break;
      case "min_area":
        newObj.area.$gte = obj[prop];
        break;
      case "max_area":
        newObj.area.$lte = obj[prop];
        break;
      case "min_floor":
        newObj.floor.$gte = obj[prop];
        break;
      case "max_floor":
        newObj.floor.$lte = obj[prop];
        break;
      case "rooms":
        newObj.rooms = obj[prop];
        break;
      case "building_type":
        newObj.building_type = obj[prop];
        break;
      case "sale":
        newObj.sale = obj[prop];
        break;
      case "rent":
        newObj.rent = obj[prop];
        break;
      case "search":
        break;
      case "street":
        newObj.street = obj[prop];
        break;
      case "district":
        newObj.district = obj[prop];
        break;
      case "search_code":
        newObj.search_code = obj[prop];
        break;
    }
  }
  console.log(newObj);
  return newObj;
};

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

    const candidate = await Home.find(filter);
    res.json(candidate);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
