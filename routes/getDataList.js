const { Router } = require('express')
const getrouter = Router()

getrouter.get('/api/customers',  (req, res) => {
  console.log("maladec");
});



module.exports = getrouter
