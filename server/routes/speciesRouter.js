const express = require('express')
const queries = require('../db/queries/speciesQueries.js')

const router = express.Router()

router.route('/')
   .get(async (req, res) => {
      res.send(await queries.getAllSpecies())
   })

module.exports = router
