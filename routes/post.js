const express = require('express')
const { renderHome, renderDetail, renderDelete } = require('../controller/post')
const router = express.Router()

router.get("/",renderHome)

router.get("/detail/:id",renderDetail)

router.post("/delete/:id",renderDelete)

module.exports = router


