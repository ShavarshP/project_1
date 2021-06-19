const { Router } = require('express')
const router = Router()

const data = [{
  id: 56787321,
  loc: "Arabkir",
  street: "kievyan",
  title: "Arabkir",
  price: 19000,
  flor: "4/5",
  area: "110",
  rooms: "4",
  description:
  "pstik jstik napastak nkarum e napastak inchu e nstat tari tak ari gnaq hac utenq vayqef ane verj@ i jerjo napastaki xovat aneq",
  img: [
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://hometobe.ru/assets/images/DSC05680.jpg",
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://hometobe.ru/assets/images/DSC05680.jpg",
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://static.1tv.ru/uploads/video/material/splash/2019/06/15/530623/big/530623_big_c95e5bfdd1.jpg",
  ],
},{
  id: 98123411,
  loc: "Arabkir",
  street: "kievyan",
  title: "Arabkir",
  price: 29000,
  flor: "4/5",
  area: "110",
  rooms: "4",
  description:
  "pstik jstik napastak nkarum e napastak inchu e nstat tari tak ari gnaq hac utenq vayqef ane verj@ i jerjo napastaki xovat aneq",
  img: [
    "https://dw1ixebl10gex.cloudfront.net/wp-content/uploads/2020/12/21200557/feature-LivingRoom-091_TREES_HH_AP20_40.jpg",
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://hometobe.ru/assets/images/DSC05680.jpg",
    "https://remont-bud.com/upload/news/300/204/img_2764.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://remont-bud.com/upload/news/300/204/img_2764.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://ksobol.ru/sites/default/files/styles/max_1920/public/2019-07/64554691354.jpg?itok=PSvbKhNR",
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
  ],
},{
  id: 67542341,
  loc: "Arabkir",
  street: "kievyan",
  title: "Arabkir",
  price: 99000,
  flor: "4/5",
  area: "110",
  rooms: "4",
  description:
  "pstik jstik napastak nkarum e napastak inchu e nstat tari tak ari gnaq hac utenq vayqef ane verj@ i jerjo napastaki xovat aneq",
  img: [
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://hometobe.ru/assets/images/DSC05680.jpg",
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://hometobe.ru/assets/images/DSC05680.jpg",
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
  ],
},{
  id: 6875431,
  loc: "Arabkir",
  street: "kievyan",
  title: "Arabkir",
  price: 189000,
  flor: "4/5",
  area: "110",
  rooms: "4",
  description:
  "pstik jstik napastak nkarum e napastak inchu e nstat tari tak ari gnaq hac utenq vayqef ane verj@ i jerjo napastaki xovat aneq",
  img: [
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://hometobe.ru/assets/images/DSC05680.jpg",
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
    "https://hometobe.ru/assets/images/DSC05680.jpg",
    "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
    "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
    "https://centreservices.ru/images/chastichniy_remont.jpg",
  ],
}];
router.get('/houses',  (req, res) => {

  res.json(data);
});

router.post(
  '/myhome',
  async (req, res) => {
  try {
    const id = req.body

    res.json(data.filter(hom=>hom.id==id.id));
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
