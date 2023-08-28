
const bcrypt = require('bcrypt')
const portfolioSchema = require('../models/portfolio')
const mongoose = require('mongoose')

const AddPortfolioEntry = async (req, res) => {
    try {
        const { hash, pname, content, created, creationdate, skills, finishdate } = req.body
        const result = await bcrypt.compare(hash, process.env.PASSHASH)
        if (!result) {
            return res.status(400).json({errmsg: "failed auth"})
        }
        // skills = JSON.stringify(skills)

        const entry = await portfolioSchema.create({hash, pname, content, created, creationdate, skills, finishdate})
        res.status(200).json({success: "good auth", entry})
    } catch (err) {
        return res.status(400).json({errmsg: err})
    }
}

const RemovePortfolioEntry = async (req, res) => {
    const { hash, id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({errmsg: "not a valid id nubmer"})
    }

    try {
        const result = await bcrypt.compare(hash, process.env.PASSHASH)
        if (!result) {
            return res.status(400).json({errmsg: "failed auth"})
        }

        const entry = await portfolioSchema.findByIdAndDelete(id)
        if (!entry) {
            return res.status(404).json({errmsg: "id doesn't exist"})
        }
        res.status(200).json({success: "good auth", entry})
    } catch (err) {
        return res.status(400).json({errmsg: err})
    }
}

const UpdatePortfolioEntry = async (req, res) => {
    const { hash, id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({errmsg: "not a valid id nubmer"})
    }
    try {
        const result = await bcrypt.compare(hash, process.env.PASSHASH)
        if (!result) {
            return res.status(400).json({errmsg: "failed auth"})
        }

        const entry = await portfolioSchema.findByIdAndUpdate(id, {...req.body})
        if (!entry) {
            return res.status(404).json({errmsg: "id doesn't exist"})
        }
        res.status(200).json({success: "good auth", entry})
    } catch (err) {
        return res.status(400).json({errmsg: err})
    }
}

const GetAllEntries = async (req, res) => {
    const entries = await portfolioSchema.find().sort({createdAt: -1})
    res.status(200).json(entries)
}

const GetSpecificEntry = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({errmsg: "not a valid id nubmer"})
    }

    const EntryInfo = await portfolioSchema.findById(id)
    if (!EntryInfo) {
        return res.status(404).json({errmsg: 'unable to find portfolio entry'})
    }
    res.status(200).json(EntryInfo)
}

module.exports = {
    AddPortfolioEntry,
    GetAllEntries,
    GetSpecificEntry,
    RemovePortfolioEntry,
    UpdatePortfolioEntry
}