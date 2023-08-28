require('dotenv').config()
const express = require('express')

const router = express.Router()
const { AddPortfolioEntry, GetAllEntries, GetSpecificEntry, RemovePortfolioEntry, UpdatePortfolioEntry } = require('../controllers/portfolioController')

router.get('/', (req, res, next) => {
    next()
})

router.post('/', AddPortfolioEntry)
router.delete('/:hash&:id', RemovePortfolioEntry)
router.patch('/:hash&:id', UpdatePortfolioEntry)
router.get('/', GetAllEntries)
router.get('/:id', GetSpecificEntry)

module.exports = router